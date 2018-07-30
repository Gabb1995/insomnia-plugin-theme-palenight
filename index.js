module.exports.themes = [{
    name: 'material-palenight',
    displayName: 'Material Palenight',
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
            default: '#dde1e1',
            success: '#fff',
            notice: '#fff',
            warning: '#fff',
            danger: '#fff',
            surprise: '#fff',
            info: '#fff'
        },
        highlight: {
            default: 'rgba(162, 175, 174, 1)',
            xxs: 'rgba(162, 175, 174, 0.05)',
            xs: 'rgba(162, 175, 174, 0.1)',
            sm: 'rgba(162, 175, 174, 0.15)',
            md: 'rgba(162, 175, 174, 0.2)',
            lg: 'rgba(162, 175, 174, 0.5)',
            xl: 'rgba(162, 175, 174, 0.8)'
        },
        rawCss: `
          .tooltip, .dropdown__menu {
            opacity: 0.95;
          }
        `,
        styles: {
            dialog: {
                background: {
                    default: '#292D3E'
                },
                foreground: {
                    default: '#EEFFFF'
                }
            },
            paneHeader: {
              background: {
                success: '#C3E887',
                notice: '#FFCB6B',
                warning: '#F78C6C',
                danger: '#FF5370',
                surprise: '#C792EA',
                info: '#82AAFF'
              },
              foreground: {
                success: '#000000'
              }
            },
            sidebarHeader: {
                highlight: {
                  default: 'rgba(162, 175, 174, 1)',
                  xxs: 'rgba(162, 175, 174, 0.05)',
                  xs: 'rgba(162, 175, 174, 0.1)',
                  sm: 'rgba(162, 175, 174, 0.15)',
                  md: 'rgba(162, 175, 174, 0.2)',
                  lg: 'rgba(162, 175, 174, 0.5)',
                  xl: 'rgba(162, 175, 174, 0.8)'
                }
            },
            transparentOverlay: {
                background: {
                    default: 'rgba(41, 45, 62, 0.75)'
                }
            }
        }
    }
}];