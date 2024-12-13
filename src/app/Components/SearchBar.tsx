"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 rounded-md p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 outline-none bg-transparent"
      />

      <button className="cursor-pointer">
        <Image src="/search.png" alt="searchIcon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
