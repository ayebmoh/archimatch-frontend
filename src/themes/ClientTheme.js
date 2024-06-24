const ClientTheme = {
  tab: {
    defaultProps: {
      className: "",
      activeClassName: "text-white",
      disabled: false,
    },
    styles: {
      base: {
        tab: {
          initial: {
            display: "flex",
            alignItems: "items-center",
            justifyContent: "justify-center",
            textAlign: "text-center",
            width: "w-full",
            height: "h-full",
            position: "relative",
            bg: "bg-transparent",
            py: "py-3",
            px: "px-2",
            color: "text-architect-font_girs",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-base",
            fontWeight: "font-semibold",
            lineHeight: "leading-relaxed",
            userSelect: "select-none",
            cursor: "cursor-pointer",
            borderRadius: "rounded-[8px]",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            pointerEvents: "pointer-events-none",
            userSelect: "select-none",
          },
        },
        indicator: {
          position: "absolute",
          inset: "inset-0",
          zIndex: "z-10",
          height: "h-full",
          bg: "bg-client-primary",
          borderRadius: "rounded-[8px]",
          boxShadow: "shadow",
        },
      },
    },
  },
  chip: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "client-primary",
      icon: undefined,
      open: true,
      onClose: undefined,
      action: undefined,
      animate: {
        unmount: {},
        mount: {},
      },
      className: "",
    },
    valid: {
      variants: ["filled", "gradient", "outlined", "ghost"],
      sizes: ["sm", "md", "lg"],
      colors: ["client-primary"],
    },
    styles: {
      base: {
        chip: {
          position: "relative",
          display: "grid",
          placeItems: "items-center",
          fontFamily: "font-sans",
          fontWeight: "font-normal",
          textTransform: "lowercase",
        },
      },
      variants: {
        filled: {
          "client-primary": {
            backgroud: "bg-client-primary",
            color: "text-white",
          },
        },
        outlined: {
          "client-primary": {
            border: "border border-gray-500",
            color: "text-gray-700",
          },
        },
      },
    },
  },
  select: {
    defaultProps: {
      variant: "outlined",
      color: "blue",
      size: "md",
      label: "",
      error: false,
      success: false,
      arrow: undefined,
      value: undefined,
      onChange: undefined,
      selected: undefined,
      offset: 5,
      dismiss: {},
      animate: {
        unmount: {},
        mount: {},
      },
      labelProps: {
        className: "before:content-none after:content-none",
      },
      autoHeight: false,
      lockScroll: false,
      menuProps: {},
      className: "h-48px",
      disabled: false,
      containerProps: undefined,
    },
    valid: {
      variants: ["outlined"],
      
      colors: ["client-primary","blue-gray"],
    },
    styles: {
      base: {
        container: {
          position: "relative",
          width: "w-full",
          minWidth: "min-w-[200px]",
        },
        select: {
          peer: "peer",
          width: "w-full",
          height: "h-full",
          bg: "bg-transparent",
          color: "text-blue-gray-700",
          fontFamily: "font-sans",
          fontWeight: "font-normal",
          textAlign: "text-left",
          outline: "outline outline-0 focus:outline-0",
          disabled: "disabled:bg-blue-gray-50 disabled:border-0",
          transition: "transition-all",
          
          
        },
    },
    variants: {
      outlined: {
        base: {
          
        select:{
          
          borderWidth: "placeholder-shown:border",
              borderColor: "",
              floated: {
                borderWidth: "border focus:border-2",
                borderColor: "border-t-transparent focus:border-t-transparent",
              },
        } 
        
        },
        colors: {
          select: {
            "blue-gray": {
              close: {
                borderColor: "border-blue-gray-100",
                borderWidth: "border focus:border-2",
                borderColor: "border-blue-gray-100 !border-t-blue-gray-100 ",
                borderColorFocused:
                  "focus:border-client-primary focus:!border-t-client-primary",
              },
              open: {
                borderColor: "border-client-primary",
                borderTopColor: "border-t-transparent",
                borderColor: "border-blue-gray-100 !border-t-blue-gray-100 ",
                borderColorFocused:
                  "focus:border-client-primary focus:!border-t-client-primary",
              },
              withValue: {
                borderColor: "border-blue-gray-100",
                borderTopColor: "border-t-transparent",
                borderColor: "border-blue-gray-100 !border-t-blue-gray-100 ",
                borderColorFocused:
                  "focus:border-client-primary focus:!border-t-client-primary",
                
              },
            },
          }
        },
        error: {
          select: {
            initial: {},
            states: {
              close: {
                borderWidth: "border focus:border-2",
                borderColor: "border-architect-destructive !border-t-architect-destructive ",
                borderColorFocused:
                  "focus:border-architect-destructive focus:!border-architect-destructive",
              },
              open: {
                borderWidth: "border focus:border-2",
                borderColor: "border-architect-destructive !border-t-architect-destructive ",
                borderColorFocused:
                  "focus:border-architect-destructive focus:!border-architect-destructive",
              },
              withValue: {
                borderWidth: "border focus:border-2",
                borderColor: "border-architect-destructive !border-t-architect-destructive ",
                borderColorFocused:
                  "focus:border-architect-destructive focus:!border-architect-destructive",
              },
            },
          },},
          success: {
            select: {
              initial: {},
              states: {
                close: {
                  borderWidth: "border focus:border-2",
                  borderColor: "border-architect-success !border-t-architect-success ",
                  borderColorFocused:
                    "focus:border-architect-success focus:!border-architect-success",
                },
                open: {
                  borderWidth: "border focus:border-2",
                  borderColor: "border-architect-success !border-t-architect-success ",
                  borderColorFocused:
                    "focus:border-architect-success focus:!border-architect-success",
                },
                withValue: {
                  borderWidth: "border focus:border-2",
                  borderColor: "border-architect-success !border-t-architect-success ",
                  borderColorFocused:
                    "focus:border-architect-success focus:!border-architect-success",
                },
              },
            },}
      }
    }
  }
},
  otp_area:{ 
    width: "w-[70%]" ,
    margin: "m-20 m-auto",
textAlign : "text-center",
display: "flex",
gap:"gap-2",
      },
      focus:{ 
        border: "border-2",
        border_color: "border_color_red"
             },
          
 checkbox: {
   defaultProps: {
      color: "blue",
      label: undefined,
      icon: undefined,
      ripple: true,
      className: "",
      disabled: false,
      containerProps: {
        border :'border-4',
        borderColor:"border-red-300"
      },
      labelProps: undefined,
      iconProps: undefined,
    },

    styles: {
      base: {
        root: {
          display: "inline-flex",
          alignItems: "items-center",
        },
        container: {
          position: "relative",
          display: "flex",
          alignItems: "items-center",
          cursor: "cursor-pointer",
          p: "p-1",
          borderRadius: "rounded-full",
        //   border :'border-4',
        // borderColor:"border-red-300",
        minWidth:"!min-w-6",
        },
        input: {
          peer: "peer",
          position: "relative",
          appearance: "appearance-none",
          width: "w-5",
          height: "h-5",
          minWidth:"!min-w-5",
          borderWidth: "border",
          borderRadius: "rounded-md",
          borderColor: "border-blue-gray-200",
          cursor: "cursor-pointer",
          transition: "transition-all",
          before: {
            content: "before:content['']",
            display: "before:block",
            bg: "before:bg-blue-gray-500",
            width: "before:w-12",
            minWidth:"!before:min-w-14",
            height: "before:h-12",
            borderRadius: "before:rounded-full",
            position: "before:absolute",
            top: "before:top-2/4",
            left: "before:left-2/4",
            transform: "before:-translate-y-2/4 before:-translate-x-2/4",
            opacity: "before:opacity-0 hover:before:opacity-10",
            transition: "before:transition-opacity",
          },
        },
        label: {
          color: "text-gray-700",
          fontWeight: "font-light",
          fontSize:"text-[10px]",
          userSelect: "select-none",
          cursor: "cursor-pointer",
          mt: "mt-px",
        },

        disabled: {
          opacity: "opacity-50",
          pointerEvents: "pointer-events-none",
        },
      },

    },
  },
  button: {
    defaultProps: {
      variant: "filled",
      size: "md",
      color: "client-primary",
      fullWidth: false,
      ripple: true,
      className: "",
    },
    valid: {
      colors: ["client-primary"],
    },
    styles: {
      sizes: {
        sm: {
          fontSize: "text-[12px]",
          py: "py-[9px]",
          px: "px-[16px]",
          borderRadius: "rounded-[6px]",
        },
        md: {
          fontSize: "text-[18px]",
          py: "py-[14px]",
          px: "px-[24px]",
          borderRadius: "rounded-[10px]",
          fontWeight: "font-semibold",
        },
        lg: {
          fontSize: "text-[22px]",
          py: "py-[22px]",
          px: "px-[50px]",
          borderRadius: "rounded-[12px]",
          fontWeight: "font-bold",
        },
      },
      variants: {
        filled: {
          "client-primary": {
            backgroud: "bg-client-primary",
            color: "text-white",
            shadow: "shadow-md shadow-orange-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85] hover:bg-client-primary-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
          },
        },
        outlined: {
          "client-primary": {
            border: "border border-client-primary",
            color: "text-client-primary",
            hover:
              "hover:bg-client-primary hover:text-white hover:shadow-lg hover:transition-colors hover:duration-300 ",
            focus: "focus:ring focus:ring-orange-200",
            active: "active:opacity-[0.85]",
            case: "normal-case",
          },
        },
      },
    },
  },
  navbar: {
    defaultProps: {
      variant: "filled",
      color: "white",
      shadow: true,
      blurred: true,
      fullWidth: true,
      className: "normal",
    },
  },
  menu: {
    defaultProps: {
      placement: "bottom",
      offset: 5,
      dismiss: {
        itemPress: true,
      },
      animate: {
        unmount: {},
        mount: {},
      },
      lockScroll: false,
    },
    styles: {
      base: {
        menu: {
          bg: "bg-white",
          minWidth: "min-w-[180px]",
          p: "p-3",
          border: "border border-blue-gray-50",
          borderRadius: "rounded-md",
          boxShadow: "shadow-lg shadow-blue-gray-500/10",
          fontFamily: "font-sans",
          fontSize: "text-sm",
          fontWeight: "font-normal",
          color: "text-blue-gray-500",
          overflow: "overflow-auto",
          outline: "focus:outline-none",
          zIndex: "z-[999]",
        },
        item: {
          initial: {
            display: "block",
            width: "w-full",
            minWidth: "w-max",
            pt: "pt-[14px]",
            pb: "pb-0",
            px: "px-3",
            borderRadius: "rounded-md",
            textAlign: "text-start",
            lightHeight: "leading-tight",
            cursor: "cursor-pointer",
            userSelect: "select-none",
            transition: "transition-all",
            bg: "bg-white",
            color:
              "text-client-secondary_text_color hover:text-client-text_hover focus:text-client-primary active:text-client-primary",
            outline: "outline-none",
            fontWeight: "font-semibold",
            fontFamily: "Lato",
            fontSize: "text-base",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            pointerEvents: "pointer-events-none",
            userSelect: "select-none",
            bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
            color:
              "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
          },
        },
      },
    },
  },
  input: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "client-primary",
      label: "",
      error: false,
      success: false,
      icon: undefined,
      labelProps: {
        className: "before:content-none after:content-none",
      },
      containerProps: undefined,
      shrink: false,
      className: "",
    },
    valid: {
      variants: ["standard", "outlined", "static"],
      sizes: ["md", "lg"],
      colors: ["client-primary"],
    },
    styles: {
      base: {
        input: {
          borderRadius: "rounded-[8px]",
          height: "h-[48px]",
        },
      },
      variants: {
        outlined: {
          base: {
            input: {
              borderWidth: "placeholder-shown:border",
              borderColor: "",
              floated: {
                borderWidth: "border focus:border-2",
                borderColor: "border-t-transparent focus:border-t-transparent",
              },
            },
          },
          colors: {
            input: {
              "client-primary": {
                borderColor: "border-blue-gray-200 !border-t-blue-gray-200 ",
                borderColorFocused:
                  "focus:border-client-primary focus:!border-t-client-primary",
              },
            },
            label: {
              "client-primary": {
                color: "!text-black peer-focus:text-black",
                before: "",
                after: "",
              },
            },
          },
          error: {
            input: {
              borderColor:
                "border-client-destructive placeholder-shown:border-t-client-destructive placeholder-shown:border-client-destructive !border-t-client-destructive",
              borderColorFocused:
                "focus:border-client-destructive focus:border-t-client-destructive",
            },
            label: {
              color:
                "text-client-destructive peer-focus:text-client-destructive peer-placeholder-shown:text-client-destructive",
              before: "",
              after: "",
            },
          },
          success: {
            input: {
              borderColor:
                "border-client-success placeholder-shown:border-t-client-success placeholder-shown:border-client-success !border-t-client-success",
              borderColorFocused:
                "focus:border-client-success focus:border-t-client-success",
            },
            label: {
              color:
                "text-client-success peer-focus:text-client-success peer-placeholder-shown:text-client-success",
              before: "",
              after: "",
            },
          },
        },
      },
    },
  },
};

export default ClientTheme;
