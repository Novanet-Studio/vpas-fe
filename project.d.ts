// This .d.ts file must contain the project type declaration
declare namespace Project {
  // API Request
  type ArticlesRequest = {
    data: ArticlesRequestData;
  };

  type ProductsRequest = {
    data: ProductsRequestData;
  };

  type CategoriesRequest = {
    data: CategoriesRequestData;
  };

  // API Request Data
  type ArticlesRequestData = {
    articulos: Articles;
  };

  type ProductsRequestData = {
    productos: Products;
  };

  type CategoriesRequestData = {
    categorias: Categories;
  };

  // API content
  type Articles = {
    data: ArticlesData[];
  };

  type Products = {
    data: ProductsData[];
  };

  type Categories = {
    data: CategoriesData[];
  };

  // API Data
  type ArticlesData = {
    attributes: ArticleAttributes;
  };

  type ProductsData = {
    attributes: ProductAttributes;
  };

  type CategoriesData = {
    attributes: CategoryAttributes;
  };

  // Data Attributes
  type ArticleAttributes = {
    titulo: string;
    descripcion: string;
    slug: string;
    imagen: Image;
  };

  type ProductAttributes = {
    nombre_especie: string;
    subespecie: SubEspecie[];
  };

  type CategoryAttributes = {
    nombre: string;
    imagen: Image;
    productos: Products;
  };

  type SubEspecie = {
    nombre_subespecie: string;
    nombre_ingles: string;
    nombre_tecnico: string;
    presentacion: ImageAlt;
    imagen: Image;
  };

  // Others
  type Image = {
    data: ImageData;
  };

  type ImageAlt = {
    data: ImageData[];
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
