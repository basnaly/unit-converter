import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
	typography: {
		fontSize: 24,
		backgroundColor: "gray",
	},
    // palette: {
    //     primary: {
    //         main: '#FF1493' // deeppink
    //     },
    // },
	components: {
		MuiDialog: {
            styleOverrides: {
                paper: {
					backgroundColor: "linen",
				},
			},
		},
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    backgroundColor: 'lightgray',
                    border: '1px solid #FF1493',      
                }
            }
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: '22px',
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#FF1493',
                    fontSize: '16px',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    color: 'blue',
                },
                input: {
                    fontSize: '20px',
                },
            }
        },
        MuiBadge: {
            styleOverrides: {
                badge: {
                    color: 'white',
                    backgroundColor: '#FF1493',
                    fontWeight: 'bold',
                    fontSize: "16px",
                },
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#FF1493',
                    fontWeight: "bold",
                    fontSize: '18px',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'black',
                    textTransform: "none",
                    fontSize: "20px",
                    "&.Mui-selected": {
                        
                    },
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: 'space-evenly',
                },
                root: {
                    width: '100%',
                    backgroundColor: 'lightskyblue',
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: "16px",
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: 'gray',
                },
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: "20px",
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                outlined: {
                    padding: "5px 10px",
                }
            }
        },
        MuiSnackbar:{
            styleOverrides: {
                root: {
                    "& .MuiPaper-root": {
                        backgroundColor: 'dimgray',
                    }
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                action: {
                    color: 'white',
                },
                message: {
                    color: 'white',
                    fontSize: '20px'
                }
            }
        }
	},
});
