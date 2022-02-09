class DT_ComponentOptions extends DOMTemplate {
  constructor() {
    super({
      tagName: "div",
      className: "component-options",
      childs: [
        {
          tagName: "div",
          className: "btn add",
          innerHTML: `
          <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M5.85 12.35C5.85 12.709 6.14102 13 6.5 13C6.85898 13 7.15 12.709 7.15 12.35V7.15H12.35C12.709 7.15 13 6.85898 13 6.5C13 6.14102 12.709 5.85 12.35 5.85H7.15V0.65C7.15 0.291015 6.85898 0 6.5 0C6.14102 0 5.85 0.291014 5.85 0.649999V5.85H0.65C0.291015 5.85 0 6.14102 0 6.5C0 6.85898 0.291014 7.15 0.649999 7.15H5.85V12.35Z" fill="white"/>
          </svg>`,
        },
        {
          tagName: "div",
          className: "btn properties",
          innerHTML: `<svg  viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5ZM0.339243 6.5C0.339243 9.90249 3.09751 12.6608 6.5 12.6608C9.90249 12.6608 12.6608 9.90249 12.6608 6.5C12.6608 3.09751 9.90249 0.339243 6.5 0.339243C3.09751 0.339243 0.339243 3.09751 0.339243 6.5ZM7.47502 3.57499C7.47502 4.11347 7.0385 4.54999 6.50002 4.54999C5.96155 4.54999 5.52502 4.11347 5.52502 3.57499C5.52502 3.03651 5.96155 2.59999 6.50002 2.59999C7.0385 2.59999 7.47502 3.03651 7.47502 3.57499ZM5.85002 5.52501C5.67053 5.52501 5.52502 5.67052 5.52502 5.85001V10.725C5.52502 10.9045 5.67053 11.05 5.85002 11.05H7.15002C7.32952 11.05 7.47502 10.9045 7.47502 10.725V5.85001C7.47502 5.67052 7.32952 5.52501 7.15002 5.52501H5.85002Z" fill="white"/>
          </svg>`,
        },
        {
          tagName: "div",
          className: "btn delete",
          innerHTML: `<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.1419 0.195918C0.880672 -0.0653062 0.457143 -0.0653061 0.195918 0.195918C-0.0653062 0.457143 -0.0653061 0.880672 0.195918 1.1419L4.12821 5.07419L0.344302 8.8581C0.083078 9.11933 0.0830781 9.54286 0.344303 9.80408C0.605527 10.0653 1.02906 10.0653 1.29028 9.80408L5.07419 6.02017L8.70972 9.6557C8.97095 9.91692 9.39447 9.91692 9.6557 9.6557C9.91692 9.39447 9.91692 8.97094 9.6557 8.70972L6.02017 5.07419L9.80408 1.29028C10.0653 1.02906 10.0653 0.605528 9.80408 0.344304C9.54286 0.0830792 9.11933 0.0830793 8.8581 0.344304L5.07419 4.12821L1.1419 0.195918Z" fill="#F9F9F9"/>
          </svg>`,
        },
      ],
    });
  }
}
