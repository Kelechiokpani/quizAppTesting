/** @format */

import React, { createContext, useState } from 'react';
export const Store = createContext({});

const ContextData = ({ children }) => {
  const [Data, setData] = useState([  
    { question: " An HTML document can contain __________________ ?", 
     a: "Attributes",
     b: "Tags", 
     c: "Raw text", 
     d: "All the answers are true"
   },

       { question: "  page designed in HTML is called __________________ ?", 
       a: "Application", 
       b: " Cover page", 
       c: "Front-end", 
       d: "All the answers are true"
   },

       {question: "  An HTML document is saved with the __________________ extension.",
       a: ".htl",
       b: ".html",
       c: ".hml",
       d: ".htnl"
   },

   {question: "  The HTML document contains a root tag called __________________ ?",
       a: "Head",
       b: "Title",
       c: "Body",
       d: "Html"
   },
   
   {question: "  If we want to place text around an image, which CSS property should we use ?",
       a: "push",
       b: "float",
       c: "align",
       d: "wrap"
   },
   
   {question: " Can we align an element by setting margin-left and margin-right?",
       a: "Yes it’s possible.",
       b: "not quite possible.",
       c: "yes it’s not possible.",
       d: "No, it’s not possible."
   },

   {question: " Suppose we want to arrange three DIVs so that DIV 3 is placed above DIV1, Now, which CSS property are we going to use to control the stack order?",
       a: "d-index",
       b: "s-index",
       c: "x-index",
       d: "z-index"
   },
       
   {question: "  If we want to use a nice green dotted border around an image, which css property are we going to use?",
       a: "border-line",
       b: "border-style",
       c: "border-decoration",
       d: "border-color"
   },

   {question: "  The attribute, which define the relationship between current document and HREF'ed URL is________________?",
       a:	"REL",
       b:	"URL",
       c:	"REV",
       d:	"None of the above"
   },
   
   {question: " Which of the following options is correct with regard to HTML ?",
       a: "It is a modelling language",
       b: "It is a DTP language",
       c: "It is a partial programming language",
       d: "It is used to structure documents "
   },
     
   {question: "    Which attribute is used to name an element uniquely ?",
   a:	"class",
   b:	"id",
   c:	"dot",
   d:	"all of above"
   },


   {question: "    Which of the following selector matches a particular element only when it lies inside a particular element ?",
   a: "The Type Selector",
   b: "The Descendant Selector",		
   c: "The Universal Selector",
   d:	"The Class Selector"
   },


   {question: "    Which of the following property is used to increase or decrease how bold or light a font appears ?",
   a: "font-family",
   b: "font-style",
   c: "font-variant",
   d: "font-weight"
   },


   {question: "    Which of the following property is used as a shorthand to specify a number of other background properties ?",
       a: "background-attachment",
       b: "background",
       c: "background-repeat",
       d: "background-position"
   },


   {question: "  Which of the following property specifies whether  a long point that wraps to a second line should align with the first line or start underneath the start of the marker of a list ?",
      a:	"list-style-type",
      b:   "list-style-position",
      c:   "list-style-image",
      d:   "list-style"
      
   },

   {question: "	HTML program can be read and rendered by _________?",
    a:  "Compiler",
    b:	"Web Browser",		
    c:	"Server",
    d:	"Interpreter"

   },
   

   {question:	"HTML tags are surrounded by __________ brackets ?",
   a:	"Square",
   b:	"Round",
   c:	"Angle",		
   d:	"Curly" 
    
    },

    {question: "	__________ automatically add some empty space (a margin) before and after each heading ?",
        a:	"Browser",
        b:"	Interpreter",
        c:	"Server",
        d:	"Compiler"
        
    },


{question:"	If we want to wrap a block of text around an image, which css property will we use ?",
        a: "wrap",			
        b: "push",	
        c: "float",
        d: "align" 	  

    },


    {question: "If we want to show an Arrow as cursor, then which value we will use ?",
        a: "pointer",
        b: "default",
        c: "arrow",
        d: "arr"
    },

    {question: "Which of the following properties will we use to display border around a cell without any content ?",
        a: "empty-cell",
        b: "blank-cell",
        c: "noncontent-cell",
        d: "void-cell"
    },

    {questioin: "Which css property you will use if you want to add some margin between a DIV's border and its inner text ?",
        a: "spacing",
        b: "margin",
        c: "padding",
        d: "inner-margin"
    },



])

  return (
    <Store.Provider
      value={{ DataStore:Data, setData: setData }}>
      {children}
    </Store.Provider>
  );
};

export default ContextData;
