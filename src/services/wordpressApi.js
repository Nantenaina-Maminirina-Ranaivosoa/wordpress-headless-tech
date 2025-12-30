const API_URL = 'https://votre-site-wp.com/wp-json/wp/v2'; // Ou endpoint GraphQL

export const getRealEstateProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/real_estate?_embed`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};