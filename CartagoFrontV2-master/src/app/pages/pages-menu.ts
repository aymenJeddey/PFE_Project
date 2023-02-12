import { NbMenuItem } from '@nebular/theme';
import { JwtHelperService } from '@auth0/angular-jwt';

const token = localStorage.getItem('token');
const helper = new JwtHelperService();
const decodedToken = helper.decodeToken(token);
const roles = decodedToken.roles;
const isAdmin = roles.indexOf('ADMIN') >= 0;
const isChefAgence = roles.indexOf('CHEF_AGENCE') >= 0;
const isChargeC = roles.indexOf('CHARGE') >= 0;

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'CARTHAGO-SECURITY',
    hidden: !isAdmin,
    group: true,
  },
  {
    title: 'DASHBOARD',
    icon: 'home-outline',
    hidden: !isAdmin,

  },

  {
    title: 'Administration de la sécurité',
    icon: { icon: 'adminSecurity' , pack: 'i51'},
    hidden: !isAdmin,
    children: [
      {
        title: 'Donnée de Securite',
        hidden: !isAdmin,
        icon: { icon: 'userDonnee' , pack: 'i52'},
        children: [
          {
            title: 'Utilisateurs',
            hidden: !isAdmin,
            icon: { icon: 'userSec' , pack: 'i53'},
            link: '/pages/tables/utilisateur1',
          },
          {
// tslint:disable-next-line:quotemark
            title: "Role utilisateur",
            hidden: !isAdmin,
            icon: { icon: 'userRole' , pack: 'i54'},
            link: '/pages/tables/GroupeRole',
          }],
      },
    ],
  },

  {
    hidden: !twoB(isChefAgence , isChargeC) ,
    title: 'CARTHAGO-REFRENTIEL',
    group: true,
  },
  {
    title: 'Référentiel Tiers/Comptes',
    icon: { icon: 'tiers' , pack: 'i15'},
    hidden:  !isChargeC ,

    children: [
      {
        title: 'Particulier',
        icon: { icon: 'particulier' , pack: 'i16'},
        link: '/pages/miscellaneous/Client',
        hidden: !isChargeC,
      },
      {
        title: 'Banques',
        icon: {icon: 'bank', pack: 'i17'},
        link: '/pages/miscellaneous/Bank',
        hidden: !isChargeC,
      },
      {
       title: 'Comptes Clients',
        hidden: !twoB(isChefAgence , isChargeC) ,
        icon: {icon: 'account', pack: 'i18'},
        link: '/pages/miscellaneous/Comptes',

      },

      {
        title: 'Groupe Clients',
        hidden: !isChargeC,
        icon: {icon: 'customer', pack: 'i69'},
        link: '/pages/miscellaneous/Group',
      },
      {
        title: 'Type',
        hidden: !isChargeC,
        icon: {icon: 'userRole', pack: 'i54'},
        link: '/pages/miscellaneous/Roole',
      },

    ],
  },
  {
    title: 'Référentiel Comptes',
    icon: { icon: 'tiers' , pack: 'i15'},
    hidden: !isChefAgence  ,

    children: [
      {
        title: 'Comptes Clients',
         hidden: !isChefAgence  ,
         icon: {icon: 'account', pack: 'i18'},
         link: '/pages/miscellaneous/Comptes',

       },
       {
        title: 'Validation compte',
        hidden: !isChefAgence,
        icon: {icon: 'validationCaisse', pack: 'i43'},
        link: '/pages/miscellaneous/validationCompte',
      },

    ],
  },

    {
      hidden: !isChargeC,
      title: 'Devises',
      icon: {icon: 'devise', pack: 'i62'},
      link: '/pages/miscellaneous/Devise',
    },
    {
      hidden: !isChargeC,
      title: 'Calendrier',
      icon: {icon: 'calendar', pack: 'i71'},
      link: '/pages/miscellaneous/Calendrier',
    },
    {
      title: 'Agence',
      hidden: !isChargeC,
      icon: {icon: 'enterprise', pack: 'i66'},
      link: '/pages/miscellaneous/Agence',
    },
    {
      title: 'Employé',
      hidden: !isChargeC,
      icon: {icon: 'employee', pack: 'i70'},
      link: '/pages/miscellaneous/Employe',
    },

    {
      title: 'CARTHAGO-ENGAGEMENT',
      hidden: !twoB(isChefAgence, isChargeC),
      group: true,
    },
    {
      title: "Gestion des crédits",
      hidden: !twoB(isChefAgence, isChargeC),
      icon: { icon: "gestionCA", pack: "i56" },
      children: [
        {
          title: "Saisie Contrat pret",
          hidden: !twoB(isChefAgence, isChargeC),
          icon: { icon: "addCP", pack: "i60" },
          link: "/pages/miscellaneous/AddEngagement",
        },
        {
          title: "Consultation Contrat",
          hidden: !twoB(isChefAgence, isChargeC),
          icon: { icon: "consuCP", pack: "i57" },
          link: "/pages/miscellaneous/EngagementList",
        },

        {
          title: "Validation contrat pret",
          hidden: !isChefAgence,
          icon: { icon: "validationCaisse", pack: "i43" },
          link: "/pages/miscellaneous/EngagementValidation",
        },
      ],
    },




 /*  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  }, */

];
function twoB(a: boolean , b: boolean) {
  if (a) {
    return a;
  }
  if (b) {
    return b;
  }
  return false;
}
function threeB(a: boolean , b: boolean , c: boolean) {
  if (a) {
    return a;
  }
  if (b) {
    return b;
  }
  if (c) {
    return c;
  }
}
function fourB(a: boolean , b: boolean , c: boolean , d: boolean) {
  if (a) {
    return a;
  }
  if (b) {
    return b;
  }
  if (c) {
    return c;
  }
  if (d) {
    return d;
  }
}
