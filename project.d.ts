// This .d.ts file must contain the project type declaration
declare namespace Project {
  // API Request
  interface IndexRequest {
    data: IndexRequestData;
  }

  interface ArticlesRequest {
    data: ArticlesRequestData;
  }

  interface ProductsRequest {
    data: ProductsRequestData;
  }

  interface CategoriesRequest {
    data: CategoriesRequestData;
  }

  // API Request Data
  interface IndexRequestData {
    categorias: Categories;
    articulos: Articles;
    carrusel: Carousel;
  }

  interface ArticlesRequestData {
    articulos: Articles;
  }

  interface ProductsRequestData {
    productos: Products;
  }

  interface CategoriesRequestData {
    categorias: Categories;
  }

  // API content
  interface Articles {
    data: ArticlesData[];
  }

  interface Products {
    data: ProductsData[];
  }

  interface Categories {
    data: CategoriesData[];
  }

  interface Carousel {
    data: CarouselData;
  }

  // API Data
  interface ArticlesData {
    attributes: ArticleAttributes;
  }

  interface ProductsData {
    attributes: ProductAttributes;
  }

  interface CategoriesData {
    attributes: CategoryAttributes;
  }

  interface CarouselData {
    attributes: CarouselAttributes;
  }

  // Data Attributes
  interface ArticleAttributes {
    titulo: string;
    descripcion: string;
    slug: string;
    imagen: Image;
  }

  interface ProductAttributes {
    nombre_especie: string;
    subespecie: SubEspecie[];
  }

  interface CategoryAttributes {
    nombre: string;
    link: string;
    imagen: Image;
    productos: Products;
  }

  interface CarouselAttributes {
    nombre: string;
    imagenes: CarouselImages[];
  }

  interface CarouselImages {
    texto: string;
    imagen: Image;
  }

  interface SubEspecie {
    nombre_subespecie: string;
    nombre_ingles: string;
    nombre_tecnico: string;
    presentacion: ImageAlt;
    imagen: Image;
    mercado_nacional: boolean | null;
    mercado_exportacion: boolean | null;
    exportable: boolean | null;
  }

  // Others
  interface Image {
    data: ImageData;
  }

  interface ImageAlt {
    data: ImageData[];
  }

  interface ImageData {
    id: string;
    attributes: ImageAttributes;
  }

  interface ImageAttributes {
    name: string;
    url: string;
    alternativeText: string;
  }
}
