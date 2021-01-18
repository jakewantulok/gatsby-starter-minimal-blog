// Original: https://github.com/sdras/night-owl-vscode-theme
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#EEFFFF",
    backgroundColor: "#1E1E28"
  },
  styles: [ 
  {
    types: ["attr-name", "keyword", "selector", "doctype"],
    style: {
      color: "#E971F0",
      fontStyle: "italic"
    }
  },{
    types: ["comment"],
    style: {
      color: "#636383",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "#71F0AA"
    }
  }, {
    types: ["number"],
    style: {
      color: "#F78C6C"
    }
  }, {
    types: ["operator", 'punctuation', 'property'],
    style: {
      color: "#71F0E9"
    }
  }, {
    types: ["boolean", 'tag', 'deleted'],
    style: {
      color: "#F07178",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "#EEFFFF"
    }
  }, 
  {
    types: ['function-variable', 'function', 'class-name', "builtin", "char", "constant", 'changed'],
    style: {
      color: '#71B8F0'
    }
  },
  {
    types: ['parameter', "inserted"],
    style: {
      color: '#F0E971'
    }
  }]
};

export default theme;
