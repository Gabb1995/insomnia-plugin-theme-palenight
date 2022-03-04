module.exports = {
  name: 'material-palenight-high-contrast',
  displayName: 'Material Palenight HC',
  theme: {
    background: {
      default: '#292D3E',
      success: '#C3E887',
      notice: '#FFCB6B',
      warning: '#F78C6C',
      danger: '#FF5370',
      surprise: '#C792EA',
      info: '#82AAFF'
    },
    foreground: {
      default: '#CCC',
      success: '#FFF',
      notice: '#FFF',
      warning: '#FFF',
      danger: '#FFF',
      surprise: '#FFF',
      info: '#FFF'
    },
    highlight: {
      default: '#757CA1',
      xxs: '#1B1E2B',
      xs: '#11142199',
      sm: '#3B404F',
      md: '#757ca133',
      lg: '#757CA199',
      xl: '#757CA166'
    },
    rawCss: `
      .tooltip, .dropdown__menu {
        opacity: 0.95;
      }
    `,
    styles: {
      appHeader: {
        background: {
          default: '#1B1E2B'
        },
        foreground: {
          default: '#757CA1'
        }
      },
      sidebar: {
        background: {
          default: '#1B1E2B'
        }
      },
      sidebarList: {
        foreground: {
          default: '#80CBC4'
        }
      },
      pane: {
        highlight: {
          xs: '#292D3E'
        }
      },
      dialog: {
        background: {
          warning: '#757CA199',
        },
        highlight: {
          xs: '#292D3E'
        }
      },
      dialogHeader: {
        background: {
          default: '#1B1E2B'
        }
      },
      transparentOverlay: {
        background: {
          default: '#292D3ECC'
        }
      }
    }
  }
}