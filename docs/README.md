📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# CHRONOMETER CUSTOM

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Este componente renderiza un cronometro el cual  indica el tiempo faltante para el final  de una promocion, junto con la imagen de dicha promocion.

![image](https://user-images.githubusercontent.com/62782975/173937732-ef99afde-c553-4895-b1ac-c113867522b4.png)

 

## Configuracion

Para utlizar el componente se debe:

1. Añadir la dependencia `"itgloberspartnercl.chronometer-custom": "0.x"` al `manifest.json`;
2. Declarar el bloque `chronometer-custom`.

![image](https://user-images.githubusercontent.com/62782975/173939381-c784afa6-1d7b-48bc-9d49-2ee17247e783.png)


### `chronometer-custom` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `promotionEndDate`      | `string`       | Fecha en la cual finaliza la promo (La fecha esta en formato ISO 8601)| `2022-08-01T04:30:00Z`        |
|-
| `promotionImage`      | `string`       |Ruta con la imagen asociada a la promo| `XXXXXX`        |


When documenting a prop whose type is `object` or `array` another prop table will be needed. You can create it following the example below:

- `propName` object:

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |



## Customizacion

La customizacion de los elementos incluidos en el componente se puede realizar desde el archivo `itgloberspartnercl.chronometer-custom.css`

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`


| CSS Handles |
| ----------- | 
| `'main__container` | 
| `image` | 
| `chronometer__container` | 
| `chronometer__content` | 
| `chronometer__number` |



<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
