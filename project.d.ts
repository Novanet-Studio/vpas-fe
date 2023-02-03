// This .d.ts file must contain the project type declaration
declare namespace Project {
  // API Request
  type IndexRequest = {
    data: IndexRequestData;
  };

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
  type IndexRequestData = {
    categorias: Categories;
    articulos: Articles;
    carrusel: Carousel;
  };

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

  type Carousel = {
    data: CarouselData;
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

  type CarouselData = {
    attributes: CarouselAttributes;
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
    link: string;
    imagen: Image;
    productos: Products;
  };

  type CarouselAttributes = {
    nombre: string;
    imagenes: CarouselImages[];
  };

  type CarouselImages = {
    texto: string;
    imagen: Image;
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
