"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Categories() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";

  const categories = [
    { id: 1, text: "All" },
    { id: 2, text: "Shelter" },
    { id: 3, text: "Railway" },
    { id: 4, text: "Oil & Gas" },
    { id: 5, text: "Religious" },
    { id: 5, text: "Industrial" },
    { id: 5, text: "Education" },
    { id: 5, text: "Tank Farms" },
    { id: 5, text: "Healthcare" },
    { id: 5, text: "Hospitality" },
    { id: 5, text: "Commercial" },
    { id: 5, text: "Government" },
    { id: 5, text: "Power & Energy" },
    { id: 5, text: "Residential & Villa" },
    { id: 5, text: "Roads & Infrastructure" },
  ];

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2
        style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Categories
      </h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {categories.map((link) => (
          <button
            key={link.id}
            onClick={() => handleCategoryClick(link.text)}
            style={{
              padding: "10px 20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              background: currentCategory === link.text ? "#007bff" : "#f9f9f9",
              color: currentCategory === link.text ? "white" : "black",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {link.text}
          </button>
        ))}
      </div>
    </div>
  );
}
