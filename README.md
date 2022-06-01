I got inspired and remade of the header on the [Chilly's](https://www.chillys.com) website. The website looks great and is has a lot of micro-animations without being overwhelming.

# 🧐 Takeaways

- CSS transitions are awesome, most UI animations don't require fancy JS libraries.
- Coloring SVGs with `currentColor` allows for an easy color transition with CSS.
- Besides box-shadow you can use [drop shadows](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) and [gradient elements](/components/header.jsx#L184) to add depth to your frontend.
- It was interesting to try `styled-components` and see how it uses props to create variations. I do think it's very verbose in comparison to `TailwindCSS` and I don't like the need to come up for names for every single styled HTML tag. This could be avoided by targeting child elements, but then you need to go back and forth in your code to make sure you add the right child tags.
