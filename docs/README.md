📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# CHRONOMETER CUSTOM

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->


This component renders a countdown, which indicates the time left until the end of a promotion. It also includes an image of that promotion.


![image](https://user-images.githubusercontent.com/62782975/173937732-ef99afde-c553-4895-b1ac-c113867522b4.png)

 

## Configuration

In order to use this component you must:

1. Add the dependency `"itgloberspartnercl.chronometer-custom": "0.x"` to `manifest.json`;
2. Declare the block `chronometer-custom`.

![image](https://user-images.githubusercontent.com/62782975/173939381-c784afa6-1d7b-48bc-9d49-2ee17247e783.png)


### `chronometer-custom` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `promotionEndDate`      | `string`       | Date till the end of promo (date format ISO 8601)| `2022-08-01T04:30:00Z`        |
|-
| `promotionImage`      | `string`       |Path where the image is located| `XXXXXX`        |



## Customization

Custom css style must be done in the file `itgloberspartnercl.chronometer-custom.css`

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
