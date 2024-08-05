import { backendBaseUrl } from "../Utils/Config";

// clean up unwanted HTML tags
export const cleanContent = (content) => {
  return (
    content
      ?.replace(/<p>&nbsp;<\/p>/g, "")
      .replace(/src="\/media\//g, `src="${backendBaseUrl}/media/`) || ""
  );
};

// get thumb URL or default image
export const getThumbUrl = (thumb) => {
  return thumb ? `${thumb}` : "/static/images/cards/contemplative-reptile.jpg";
};

// format article data
export const formatArticleData = (data) => {
  const updatedContent = cleanContent(data.content);
  const updatedThumb = getThumbUrl(data.thumb);

  return { ...data, content: updatedContent, thumb: updatedThumb };
};
