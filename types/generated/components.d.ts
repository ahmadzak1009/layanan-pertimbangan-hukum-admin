import type { Schema, Attribute } from '@strapi/strapi';

export interface PengajuanProgres extends Schema.Component {
  collectionName: 'components_pengajuan_progres';
  info: {
    displayName: 'Progres';
    icon: 'hashtag';
  };
  attributes: {
    progres: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pengajuan.progres': PengajuanProgres;
    }
  }
}
