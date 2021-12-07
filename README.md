# Shalion - Technical Challenge

## Used technologies:

- React + Mobx
- Styled Components
- Craco
- Formik
- Yup
- React Toastify

## Install & Start

Firstly we need to install dependencies by running:

`yarn`

To start:

`yarn start`

## Structure

## Core dependencies

This is the Core libraries of the project, developers need to have a clear understanding of these items:

- [React](https://reactjs.org/)
- [Mobx](https://mobx.js.org/)
- [Styled Components](https://www.styled-components.com/)

### Stores

The `stores` manage all the state of the application. Any data that need to be used on more than one component, may have to be in the store. And is here that requests need to be called, inside the `actions`.

### Scenes

Here are the pages of the application. They are split into two main files `container` and `component`. The container (index.ts) calls the store, makes state control using `useState` if needed, and manages most part of the logic inside this scene. The component is where we'll code our UI.

## Components

All single components should be in this folder, just like Button, Inputs, Checkbox. If they need some data that are saved on the stores, the scene that calls it needs to pass as props.

## Utils/Modules

Here we can find some helpers to save time when need some basic functions, enums to add patterns on some string usage, and a bunch of cool stuff.

Modules folder is just a file to not call the dependence directly, it exports the dependence for you.
