import type { Schema, Attribute } from '@strapi/strapi';

export interface PengajuanProgres extends Schema.Component {
  collectionName: 'components_pengajuan_progres';
  info: {
    displayName: 'Progres';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    progres: Attribute.String;
    keterangan: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pengajuan.progres': PengajuanProgres;
    }
  }
}
