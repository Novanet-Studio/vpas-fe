// This .d.ts file must contain the project type declaration
declare namespace Project {
  type ArticlesRequest = {
    data: ArticlesRequestData;
  };

  type ArticlesRequestData = {
    articulos: Articles;
  };

  type Articles = {
    data: ArticlesData[];
  };

  type ArticlesData = {
    attributes: ArticleAttributes;
  };

  type ArticleAttributes = {
    titulo: string;
    descripcion: string;
    slug: string;
    imagen: Image;
  };

  type Image = {
    data: ImageData;
  };

  type ImageData = {
    id: string;
    attributes: ImageAttributes;
  };

  type ImageAttributes = {
    name: string;
    url: string;
    alternativeText: string;
  };
}
