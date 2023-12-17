import { useMutation, useQuery } from "@tanstack/react-query";
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import { app, db } from "../config/firebaseConfig";
import { toast } from "react-toastify";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const getAllCategories = async () => {
  try {
    const doc_refs = await getDocs(collection(db, "category"));

    const res = [];

    doc_refs.forEach((category) => {
      res.push({
        id: category.id,
        ...category.data(),
      });
    });

    return res;
  } catch (error) {
    return error;
  }
};

const createPost = async ({ title, tags, category, description, images }) => {
  try {
    // Add the post data to Firestore
    const postRef = await addDoc(collection(db, "posts"), {
      title,
      tags,
      category,
      description,
      images: [],
    });

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        try {
          const storage = getStorage(app);
          const storageRef = ref(storage, `images/${postRef.id}/${image.name}`);
          await uploadBytes(storageRef, image);
          return await getDownloadURL(storageRef);
        } catch (uploadError) {
          console.error("Error uploading image:", uploadError);
          throw uploadError;
        }
      })
    );

    await updateDoc(postRef, { images: imageUrls });
    return { success: true };
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const post_refs = await getDocs(collection(db, "posts"));

    const res = [];

    post_refs.forEach((post) => {
      res.push({
        id: post.id,
        ...post.data(),
      });
    });

    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getAllCategories,
  });
};

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
};

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("Post created succesfully");
    },
    onError: () => {
      toast.error("Something went wrong. Try again later");
    },
  });
};
