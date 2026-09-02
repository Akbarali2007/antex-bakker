import React, { useState, useEffect, useCallback } from "react";
import api from "../api/axios"; // Aapka existing axios instance
import { Link } from "react-router";
import { Search, Clock, Users, ChefHat, Sparkles, X, ChevronRight, Bookmark } from "lucide-react";

export default function RecipesSection() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [loading, setLoading] = useState(false);
  const [activeRecipeModal, setActiveRecipeModal] = useState(null); // Quick View Ingredients Modal

  // Bakery-themed Categories
  const categories = [
    { name: "All", value: "" },
    { name: "Cakes", value: "cakes" },
    { name: "Cookies", value: "cookies" },
    { name: "Breads", value: "breads" },
    { name: "Pastries", value: "pastries" },
    { name: "Desserts", value: "desserts" },
  ];

  // Difficulty Levels
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  // API Call logic
  const loadRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append("search", searchQuery.trim());

      const categoryObj = categories.find((c) => c.name === selectedCategory);
      if (categoryObj?.value) params.append("category", categoryObj.value);
      if (selectedDifficulty !== "All") params.append("difficulty", selectedDifficulty.toLowerCase());

      const res = await api.get(`/recipes?${params.toString()}`);

      // Handle array or paginated response
      if (Array.isArray(res.data)) {
        setRecipes(res.data);
      } else if (res.data && Array.isArray(res.data.recipes)) {
        setRecipes(res.data.recipes);
      } else {
        setRecipes([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // Fallback sample data in case API endpoint is not active yet
      setRecipes(sampleRecipes);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  // Debounced search & filter trigger
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadRecipes();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, selectedCategory, selectedDifficulty, loadRecipes]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
  };

  return (
    <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-10 py-10 px-4 sm:px-6 lg:px-12 min-h-screen">
      
      {/* 1. HERO SECTION & TITLE */}
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block flex items-center justify-center gap-2">
          <ChefHat className="w-6 h-6 inline-block" /> From Our Bakery Kitchen
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D122D] tracking-tight">
          Bake Like a Professional Chef
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Step-by-step secret recipes, professional baking tips, and delicious treats you can bake right at home.
        </p>
      </div>

      {/* 2. SEARCH & CONTROLS */}
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative flex items-center">
          <Search className="w-4 h-4 text-stone-400 absolute left-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes (e.g. Chocolate Cake, Cinnamon Roll)..."
            className="w-full bg-[#FFFDF9] text-stone-900 text-xs pl-11 pr-10 py-3 rounded-full border border-amber-100/80 shadow-xs focus:outline-none focus:border-amber-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Bar: Categories + Difficulty */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-200/40 pb-4">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.name)}
                className={`text-xs font-bold px-5 py-2.5 rounded-full transition shrink-0 ${
                  selectedCategory === cat.name
                    ? "bg-[#2D122D] text-white shadow-md"
                    : "bg-[#FFFDF9] text-stone-600 border border-amber-100/60 hover:border-amber-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Difficulty Dropdown / Buttons */}
          <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1">
              Level:
            </span>
            {difficulties.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition ${
                  selectedDifficulty === level
                    ? "bg-amber-500 text-white"
                    : "bg-[#FFFDF9] text-stone-600 border border-amber-100/60 hover:bg-amber-50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. RECIPES GRID */}
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#FFFDF9] rounded-3xl border border-amber-100/60">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-xs font-semibold text-stone-500">Fetching delicious recipes...</p>
          </div>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe._id || recipe.id}
                className="bg-[#FFFDF9] rounded-3xl p-4 border border-amber-100/60 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between group relative"
              >
                {/* Image & Badges */}
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-4 bg-amber-50">
                  <img
                    src={recipe.image || "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80"}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Difficulty Badge */}
                  <span className="absolute top-3 left-3 bg-[#2D122D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {recipe.difficulty || "Easy"}
                  </span>

                  {/* Save / Bookmark Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-600 shadow-sm transition">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Recipe Information */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      {recipe.category || "Baking"}
                    </span>
                    <h3 className="text-sm font-bold text-[#2D122D] leading-snug hover:text-amber-600 transition cursor-pointer">
                      {recipe.title}
                    </h3>
                  </div>

                  {/* Meta Specs (Time, Servings) */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 pt-1 border-t border-amber-100/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{recipe.prepTime || "30 mins"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-500" />
                      <span>{recipe.servings || "4 Servings"}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveRecipeModal(recipe)}
                      className="text-stone-600 hover:text-[#2D122D] text-xs font-bold underline underline-offset-4"
                    >
                      Quick Ingredients
                    </button>
                    <Link
                      to={`/recipe/${recipe._id || recipe.id}`}
                      className="bg-[#E69D43] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-amber-600 active:scale-95 transition shadow-sm flex items-center gap-1"
                    >
                      <span>Full Recipe</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-amber-100/60 max-w-lg mx-auto space-y-3">
            <h3 className="text-lg font-bold text-[#2D122D]">No recipes found</h3>
            <p className="text-xs text-stone-500">
              Try adjusting your search term or filtering by another difficulty level.
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#2D122D] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#3d1a3d] transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. QUICK INGREDIENTS MODAL */}
      {activeRecipeModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] w-full max-w-md rounded-3xl p-6 border border-amber-100 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setActiveRecipeModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:text-stone-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full uppercase">
                {activeRecipeModal.category || "Recipe"}
              </span>
              <h3 className="text-lg font-black text-[#2D122D]">
                {activeRecipeModal.title}
              </h3>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Key Ingredients
                </h4>
                <ul className="text-xs text-stone-600 space-y-1.5 bg-[#FDF8EE] p-3.5 rounded-2xl border border-amber-100">
                  {(activeRecipeModal.ingredients || defaultIngredients).map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/recipe/${activeRecipeModal._id || activeRecipeModal.id}`}
                className="w-full bg-[#2D122D] text-white text-xs font-bold py-3 rounded-full hover:bg-[#3d1a3d] transition block text-center mt-2"
              >
                View Full Step-by-Step Instructions
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Fallback Mock Data in case API endpoint is empty
const sampleRecipes = [
  {
    id: "1",
    title: "Classic Vanilla Bean Cupcakes",
    category: "Cupcakes",
    difficulty: "Easy",
    prepTime: "25 mins",
    servings: "12 Cupcakes",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=500&q=80",
    ingredients: ["2 cups all-purpose flour", "1 cup organic sugar", "2 tsp vanilla bean paste", "1/2 cup unsalted butter"],
  },
  {
    id: "2",
    title: "Fudgy Chocolate Brownie Cake",
    category: "Cakes",
    difficulty: "Medium",
    prepTime: "45 mins",
    servings: "8 Servings",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
    ingredients: ["200g dark chocolate 70%", "1 cup brown sugar", "3 large eggs", "1/2 cup cocoa powder"],
  },
  {
    id: "3",
    title: "Artisan Sourdough French Bread",
    category: "Breads",
    difficulty: "Hard",
    prepTime: "3 hrs",
    servings: "2 Loaves",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
    ingredients: ["500g bread flour", "350ml warm water", "100g active sourdough starter", "10g sea salt"],
  },
];

const defaultIngredients = ["Flour", "Sugar", "Butter", "Eggs", "Baking Powder"];