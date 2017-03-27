export const RkTextInputTypes = (theme) => {
  return ({
    _base: {
      input: {
        flex: 1,
        fontSize: 16,
        height: 16 * 1.42,
        alignSelf: 'center',
        borderRadius: 3,
        paddingVertical: 0,
      },
      container: {
        flexDirection: 'row',
        flex: 1,
      },
      label: {
        fontSize: 16,
        alignSelf: 'center',
        marginRight: 5,
      }
    },

    basic: {
      backgroundColor: 'transparent',
      inputBackgroundColor: 'transparent',
      color: theme.colors.text.base,
      labelFontSize: 14,
      labelColor: theme.colors.text.base
    },

    bordered: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      borderWidth: 0.5,
      borderColor: theme.colors.text.base,
      borderRadius: 3
    },

    rounded: {
      borderRadius: 100,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: theme.colors.background.base
    },

    form: {
      inputBackgroundColor: theme.colors.background.base,
    },


    topLabel: {
      input: {
        alignSelf: 'stretch',
      },
      container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      label: {
        fontSize: 12,
        color: theme.colors.text.subtitle,
        alignSelf: 'flex-start'
      }
    },
    underline: {
      underlineWidth: 0.5,
      underlineColor: theme.colors.border.base
    }
    // underline: {
    //   container: {
    //     borderBottomWidth: 0.5,
    //     borderBottomColor: RkColors.blue500,
    //   }
    // },
    // 'underline-text': {
    //   input: {
    //     borderBottomWidth: 0.5,
    //     borderBottomColor: RkColors.blue500,
    //   }
    // },
    // topLabel: {
    //   input: {
    //     alignSelf: 'stretch',
    //   },
    //   container: {
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //   },
    //   label: {
    //     fontSize: 12,
    //     color: RkColors.grey500,
    //     alignSelf: 'flex-start'
    //   }
    // }
  });
};