const ArchitectTheme = {
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
          bg: "bg-architect-primary",
          borderRadius: "rounded-[8px]",
          boxShadow: "shadow",
        },
      },
    },
  },
  checkbox: {
    defaultProps: {
      color: "blue",
      label: undefined,
      icon: undefined,
      ripple: true,
      className: "",
      disabled: false,
      containerProps: undefined,
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
        },

        input: {
          peer: "peer",
          position: "relative",
          appearance: "appearance-none",
          width: "w-5",
          height: "h-5",
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
      color: "architect-primary",
      fullWidth: false,
      ripple: true,
      className: "",
    },
    valid: {
      colors: ["architect-primary","architect-dark_blue","architect-main_blue","architect-secondary_text_color","architect-font_gris"],
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
          fontWeight: "font-normal",
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
          "architect-primary": {
            backgroud: "bg-architect-primary",
            color: "text-white",
            shadow: "shadow-md shadow-orange-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85]  hover:bg-architect-primary-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
          },
          "architect-font_gris": {
            backgroud: "bg-architect-font_gris",
            color: "text-white",
            shadow: "shadow-md shadow-orange-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85]  hover:bg-architect-font_gris-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
          },
          "architect-secondary_text_color": {
            backgroud: "bg-architect-secondary_text_color",
            color: "text-white",
            shadow: "shadow-md shadow-gray-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85]  hover:bg-architect-architect-secondary_text_color-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
          },
          "architect-dark_blue": {
            backgroud: "bg-architect-dark_blue",
            color: "text-white",
            shadow: "shadow-md shadow-blue-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85]  hover:bg-architect-main_blue-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
          },
          "architect-main_blue": {
            backgroud: "bg-architect-main_blue",
            color: "text-white",
            shadow: "shadow-md shadow-blue-500/20",
            hover:
              "hover:shadow-lg hover:opacity-[0.85]  hover:bg-architect-main_blue-opacity[0.1]",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
            case: "normal-case",
            
          },
        },
        outlined: {
          "architect-primary": {
            border: "border border-architect-primary",
            color: "text-architect-primary",
            hover:
              "hover:bg-architect-primary hover:text-white hover:shadow-lg hover:transition-colors hover:duration-300 ",
            focus: "focus:ring focus:ring-orange-200",
            active: "active:opacity-[0.85]",
            case: "normal-case",
          },
          "architect-font_gris": {
            border: "border border-architect-font_gris",
            color: "text-architect-font_gris",
            hover:
              "hover:bg-architect-font_gris hover:text-white hover:shadow-lg hover:transition-colors hover:duration-300 ",
            focus: "focus:ring focus:ring-orange-200",
            active: "active:opacity-[0.85]",
            case: "normal-case",
          },
        },
        text: {
          "architect-dark_blue": {
            border: "",
            color: "text-architect-dark_blue",
            hover:
              "",
            focus: "",
            active: "active:opacity-[0.85]",
            case: "normal-case",
            text:"text-architect-dark_blue"
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
      className: "",
      disabled: false,
      containerProps: undefined,
    },
    valid: {
      variants: ["outlined"],
      
      colors: ["architect-primary","blue-gray"],
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
                  "focus:border-architect-primary focus:!border-t-architect-primary",
              },
              open: {
                borderColor: "border-architect-primary",
                borderTopColor: "border-t-transparent",
                borderColor: "border-blue-gray-100 !border-t-blue-gray-100 ",
                borderColorFocused:
                  "focus:border-architect-primary focus:!border-t-architect-primary",
              },
              withValue: {
                borderColor: "border-blue-gray-100",
                borderTopColor: "border-t-transparent",
                borderColor: "border-blue-gray-100 !border-t-blue-gray-100 ",
                borderColorFocused:
                  "focus:border-architect-primary focus:!border-t-architect-primary",
                
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
  input: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "architect-primary",
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
      colors: ["architect-primary"],
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
              "architect-primary": {
                borderColor: "border-blue-gray-100 !border-t-blue-gray-100 ",
                borderColorFocused:
                  "focus:border-architect-primary focus:!border-t-architect-primary",
              },
            },
            label: {
              "architect-primary": {
                color: "!text-black peer-focus:text-black",
                before: "",
                after: "",
              },
            },
          },
          error: {
            input: {
              borderColor:
                "border-architect-destructive placeholder-shown:border-t-architect-destructive placeholder-shown:border-architect-destructive !border-t-architect-destructive",
              borderColorFocused:
                "focus:border-architect-destructive focus:border-t-architect-destructive",
            },
            label: {
              color:
                "text-architect-destructive peer-focus:text-architect-destructive peer-placeholder-shown:text-architect-destructive",
              before: "",
              after: "",
            },
          },
          success: {
            input: {
              borderColor:
                "border-architect-success placeholder-shown:border-t-architect-success placeholder-shown:border-architect-success !border-t-architect-success",
              borderColorFocused:
                "focus:border-architect-success focus:border-t-architect-success",
            },
            label: {
              color:
                "text-architect-success peer-focus:text-architect-success peer-placeholder-shown:text-architect-success",
              before: "",
              after: "",
            },
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
              "text-architect-secondary_text_color hover:text-architect-text_hover focus:text-architect-primary active:text-architect-primary",
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
  chip: {
    defaultProps: {
      variant: "outlined",
      size: "md",
      color: "architect-primary",
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
      colors: ["architect-primary"],
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
          "architect-primary": {
            backgroud: "bg-architect-primary",
            color: "text-white",
          },
        },
        outlined: {
          "architect-primary": {
            border: "border border-gray-500",
            color: "text-gray-700",
          },
        },
      },
    },
  },
  // iconButton: {
  //   defaultProps: {
  //     variant: "filled",
  //     size: "md",
  //     color: "architect-primary",
  //     fullWidth: false,
  //     ripple: true,
  //     className: "",
  //   },
  //   valid: {
  //     variants: ["filled", "outlined", "gradient", "text"],
  //     sizes: ["sm", "md", "lg"],
  //     colors: [
  //       "architect-primary",
  //     ],
  //   },
  //   styles: {
  //     base: {
  //       position: "relative",
  //       verticalAlign: "align-middle",
  //       userSelect: "select-none",
  //       fontFamily: "font-sans",
  //       fontWeight: "font-medium",
  //       textAlign: "text-center",
  //       textTransform: "uppercase",
  //       transition: "transition-all",
  //       disabled: "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
  //     },
  //     sizes: {
  //       sm: {
  //         width: "w-8",
  //         maxWidth: "max-w-[32px]",
  //         height: "h-8",
  //         maxHeight: "max-h-[32px]",
  //         borderRadius: "rounded-lg",
  //         fontSize: "text-xs",
  //       },
  //       md: {
  //         width: "w-10",
  //         maxWidth: "max-w-[40px]",
  //         height: "h-10",
  //         maxHeight: "max-h-[40px]",
  //         borderRadius: "rounded-lg",
  //         fontSize: "text-xs",
  //       },
  //       lg: {
  //         width: "w-12",
  //         maxWidth: "max-w-[48px]",
  //         height: "h-12",
  //         maxHeight: "max-h-[48px]",
  //         borderRadius: "rounded-lg",
  //         fontSize: "text-sm",
  //       },
  //     },
  //     variants: {
  //       filled: {
  //         white: {
  //           backgroud: "bg-white",
  //           color: "text-blue-gray-900",
  //           shadow: "shadow-md shadow-blue-gray-500/10",
  //           hover: "hover:shadow-lg hover:shadow-blue-gray-500/20",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         "blue-gray": {
  //           backgroud: "bg-blue-gray-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-blue-gray-500/20",
  //           hover: "hover:shadow-lg hover:shadow-blue-gray-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         gray: {
  //           backgroud: "bg-gray-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-gray-500/20",
  //           hover: "hover:shadow-lg hover:shadow-gray-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         brown: {
  //           backgroud: "bg-brown-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-brown-500/20",
  //           hover: "hover:shadow-lg hover:shadow-brown-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         "deep-orange": {
  //           backgroud: "bg-deep-orange-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-deep-orange-500/20",
  //           hover: "hover:shadow-lg hover:shadow-deep-orange-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         orange: {
  //           backgroud: "bg-orange-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-orange-500/20",
  //           hover: "hover:shadow-lg hover:shadow-orange-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         amber: {
  //           backgroud: "bg-amber-500",
  //           color: "text-black",
  //           shadow: "shadow-md shadow-amber-500/20",
  //           hover: "hover:shadow-lg hover:shadow-amber-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         yellow: {
  //           backgroud: "bg-yellow-500",
  //           color: "text-black",
  //           shadow: "shadow-md shadow-yellow-500/20",
  //           hover: "hover:shadow-lg hover:shadow-yellow-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         lime: {
  //           backgroud: "bg-lime-500",
  //           color: "text-black",
  //           shadow: "shadow-md shadow-lime-500/20",
  //           hover: "hover:shadow-lg hover:shadow-lime-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         "light-green": {
  //           backgroud: "bg-light-green-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-light-green-500/20",
  //           hover: "hover:shadow-lg hover:shadow-light-green-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         green: {
  //           backgroud: "bg-green-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-green-500/20",
  //           hover: "hover:shadow-lg hover:shadow-green-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         teal: {
  //           backgroud: "bg-teal-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-teal-500/20",
  //           hover: "hover:shadow-lg hover:shadow-teal-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         cyan: {
  //           backgroud: "bg-cyan-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-cyan-500/20",
  //           hover: "hover:shadow-lg hover:shadow-cyan-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         "light-blue": {
  //           backgroud: "bg-light-blue-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-light-blue-500/20",
  //           hover: "hover:shadow-lg hover:shadow-light-blue-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         blue: {
  //           backgroud: "bg-blue-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-blue-500/20",
  //           hover: "hover:shadow-lg hover:shadow-blue-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         indigo: {
  //           backgroud: "bg-indigo-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-indigo-500/20",
  //           hover: "hover:shadow-lg hover:shadow-indigo-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         "deep-purple": {
  //           backgroud: "bg-deep-purple-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-deep-purple-500/20",
  //           hover: "hover:shadow-lg hover:shadow-deep-purple-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         purple: {
  //           backgroud: "bg-purple-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-purple-500/20",
  //           hover: "hover:shadow-lg hover:shadow-purple-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         pink: {
  //           backgroud: "bg-pink-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-pink-500/20",
  //           hover: "hover:shadow-lg hover:shadow-pink-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         red: {
  //           backgroud: "bg-red-500",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-red-500/20",
  //           hover: "hover:shadow-lg hover:shadow-red-500/40",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //       },
  //       gradient: {
  //         white: {
  //           backgroud: "bg-white",
  //           color: "text-blue-gray-900",
  //           shadow: "shadow-md shadow-blue-gray-500/10",
  //           hover: "hover:shadow-lg hover:shadow-blue-gray-500/20",
  //           focus: "focus:opacity-[0.85] focus:shadow-none",
  //           active: "active:opacity-[0.85] active:shadow-none",
  //         },
  //         "blue-gray": {
  //           backgroud: "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-blue-gray-500/20",
  //           hover: "hover:shadow-lg hover:shadow-blue-gray-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         gray: {
  //           backgroud: "bg-gradient-to-tr from-gray-600 to-gray-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-gray-500/20",
  //           hover: "hover:shadow-lg hover:shadow-gray-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         brown: {
  //           backgroud: "bg-gradient-to-tr from-brown-600 to-brown-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-brown-500/20",
  //           hover: "hover:shadow-lg hover:shadow-brown-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "deep-orange": {
  //           backgroud: "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-deep-orange-500/20",
  //           hover: "hover:shadow-lg hover:shadow-deep-orange-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         orange: {
  //           backgroud: "bg-gradient-to-tr from-orange-600 to-orange-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-orange-500/20",
  //           hover: "hover:shadow-lg hover:shadow-orange-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         amber: {
  //           backgroud: "bg-gradient-to-tr from-amber-600 to-amber-400",
  //           color: "text-black",
  //           shadow: "shadow-md shadow-amber-500/20",
  //           hover: "hover:shadow-lg hover:shadow-amber-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         yellow: {
  //           backgroud: "bg-gradient-to-tr from-yellow-600 to-yellow-400",
  //           color: "text-black",
  //           shadow: "shadow-md shadow-yellow-500/20",
  //           hover: "hover:shadow-lg hover:shadow-yellow-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         lime: {
  //           backgroud: "bg-gradient-to-tr from-lime-600 to-lime-400",
  //           color: "text-black",
  //           shadow: "shadow-md shadow-lime-500/20",
  //           hover: "hover:shadow-lg hover:shadow-lime-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "light-green": {
  //           backgroud: "bg-gradient-to-tr from-light-green-600 to-light-green-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-light-green-500/20",
  //           hover: "hover:shadow-lg hover:shadow-light-green-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         green: {
  //           backgroud: "bg-gradient-to-tr from-green-600 to-green-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-green-500/20",
  //           hover: "hover:shadow-lg hover:shadow-green-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         teal: {
  //           backgroud: "bg-gradient-to-tr from-teal-600 to-teal-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-teal-500/20",
  //           hover: "hover:shadow-lg hover:shadow-teal-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         cyan: {
  //           backgroud: "bg-gradient-to-tr from-cyan-600 to-cyan-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-cyan-500/20",
  //           hover: "hover:shadow-lg hover:shadow-cyan-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "light-blue": {
  //           backgroud: "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-light-blue-500/20",
  //           hover: "hover:shadow-lg hover:shadow-light-blue-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         blue: {
  //           backgroud: "bg-gradient-to-tr from-blue-600 to-blue-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-blue-500/20",
  //           hover: "hover:shadow-lg hover:shadow-blue-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         indigo: {
  //           backgroud: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-indigo-500/20",
  //           hover: "hover:shadow-lg hover:shadow-indigo-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "deep-purple": {
  //           backgroud: "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-deep-purple-500/20",
  //           hover: "hover:shadow-lg hover:shadow-deep-purple-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         purple: {
  //           backgroud: "bg-gradient-to-tr from-purple-600 to-purple-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-purple-500/20",
  //           hover: "hover:shadow-lg hover:shadow-purple-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         pink: {
  //           backgroud: "bg-gradient-to-tr from-pink-600 to-pink-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-pink-500/20",
  //           hover: "hover:shadow-lg hover:shadow-pink-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //         red: {
  //           backgroud: "bg-gradient-to-tr from-red-600 to-red-400",
  //           color: "text-white",
  //           shadow: "shadow-md shadow-red-500/20",
  //           hover: "hover:shadow-lg hover:shadow-red-500/40",
  //           active: "active:opacity-[0.85]",
  //         },
  //       },
  //       outlined: {
          
  //         "architect-primary": {
  //           border: "border border-architect-primary",
  //           color: "text-architect-primary",
  //           hover: "hover:opacity-75",
  //           focus: "",
  //           active: "active:opacity-[0.85]",
  //         },
  //         gray: {
  //           border: "border border-gray-500",
  //           color: "text-gray-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-gray-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         brown: {
  //           border: "border border-brown-500",
  //           color: "text-brown-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-brown-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "deep-orange": {
  //           border: "border border-deep-orange-500",
  //           color: "text-deep-orange-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-deep-orange-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         orange: {
  //           border: "border border-orange-500",
  //           color: "text-orange-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-orange-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         amber: {
  //           border: "border border-amber-500",
  //           color: "text-amber-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-amber-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         yellow: {
  //           border: "border border-yellow-500",
  //           color: "text-yellow-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-yellow-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         lime: {
  //           border: "border border-lime-500",
  //           color: "text-lime-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-lime-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "light-green": {
  //           border: "border border-light-green-500",
  //           color: "text-light-green-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-light-green-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         green: {
  //           border: "border border-green-500",
  //           color: "text-green-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-green-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         teal: {
  //           border: "border border-teal-500",
  //           color: "text-teal-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-teal-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         cyan: {
  //           border: "border border-cyan-500",
  //           color: "text-cyan-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-cyan-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "light-blue": {
  //           border: "border border-light-blue-500",
  //           color: "text-light-blue-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-light-blue-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         blue: {
  //           border: "border border-blue-500",
  //           color: "text-blue-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-blue-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         indigo: {
  //           border: "border border-indigo-500",
  //           color: "text-indigo-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-indigo-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         "deep-purple": {
  //           border: "border border-deep-purple-500",
  //           color: "text-deep-purple-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-deep-purple-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         purple: {
  //           border: "border border-purple-500",
  //           color: "text-purple-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-purple-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         pink: {
  //           border: "border border-pink-500",
  //           color: "text-pink-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-pink-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //         red: {
  //           border: "border border-red-500",
  //           color: "text-red-500",
  //           hover: "hover:opacity-75",
  //           focus: "focus:ring focus:ring-red-200",
  //           active: "active:opacity-[0.85]",
  //         },
  //       },
  //       text: {
  //         white: {
  //           color: "text-white",
  //           hover: "hover:bg-white/10",
  //           active: "active:bg-white/30",
  //         },
  //         "blue-gray": {
  //           color: "text-blue-gray-500",
  //           hover: "hover:bg-blue-gray-500/10",
  //           active: "active:bg-blue-gray-500/30",
  //         },
  //         gray: {
  //           color: "text-gray-500",
  //           hover: "hover:bg-gray-500/10",
  //           active: "active:bg-gray-500/30",
  //         },
  //         brown: {
  //           color: "text-brown-500",
  //           hover: "hover:bg-brown-500/10",
  //           active: "active:bg-brown-500/30",
  //         },
  //         "deep-orange": {
  //           color: "text-deep-orange-500",
  //           hover: "hover:bg-deep-orange-500/10",
  //           active: "active:bg-deep-orange-500/30",
  //         },
  //         orange: {
  //           color: "text-orange-500",
  //           hover: "hover:bg-orange-500/10",
  //           active: "active:bg-orange-500/30",
  //         },
  //         amber: {
  //           color: "text-amber-500",
  //           hover: "hover:bg-amber-500/10",
  //           active: "active:bg-amber-500/30",
  //         },
  //         yellow: {
  //           color: "text-yellow-500",
  //           hover: "hover:bg-yellow-500/10",
  //           active: "active:bg-yellow-500/30",
  //         },
  //         lime: {
  //           color: "text-lime-500",
  //           hover: "hover:bg-lime-500/10",
  //           active: "active:bg-lime-500/30",
  //         },
  //         "light-green": {
  //           color: "text-light-green-500",
  //           hover: "hover:bg-light-green-500/10",
  //           active: "active:bg-light-green-500/30",
  //         },
  //         green: {
  //           color: "text-green-500",
  //           hover: "hover:bg-green-500/10",
  //           active: "active:bg-green-500/30",
  //         },
  //         teal: {
  //           color: "text-teal-500",
  //           hover: "hover:bg-teal-500/10",
  //           active: "active:bg-teal-500/30",
  //         },
  //         cyan: {
  //           color: "text-cyan-500",
  //           hover: "hover:bg-cyan-500/10",
  //           active: "active:bg-cyan-500/30",
  //         },
  //         "light-blue": {
  //           color: "text-light-blue-500",
  //           hover: "hover:bg-light-blue-500/10",
  //           active: "active:bg-light-blue-500/30",
  //         },
  //         blue: {
  //           color: "text-blue-500",
  //           hover: "hover:bg-blue-500/10",
  //           active: "active:bg-blue-500/30",
  //         },
  //         indigo: {
  //           color: "text-indigo-500",
  //           hover: "hover:bg-indigo-500/10",
  //           active: "active:bg-indigo-500/30",
  //         },
  //         "deep-purple": {
  //           color: "text-deep-purple-500",
  //           hover: "hover:bg-deep-purple-500/10",
  //           active: "active:bg-deep-purple-500/30",
  //         },
  //         purple: {
  //           color: "text-purple-500",
  //           hover: "hover:bg-purple-500/10",
  //           active: "active:bg-purple-500/30",
  //         },
  //         pink: {
  //           color: "text-pink-500",
  //           hover: "hover:bg-pink-500/10",
  //           active: "active:bg-pink-500/30",
  //         },
  //         red: {
  //           color: "text-red-500",
  //           hover: "hover:bg-red-500/10",
  //           active: "active:bg-red-500/30",
  //         },
  //       },
  //     },
  //   },
  // },

};

export default ArchitectTheme;
