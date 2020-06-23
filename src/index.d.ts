import Vue from 'vue';

export class Input extends Vue {}
export class Search extends Vue {}
export function searchAsYouTypeToResultList(restApiUrl: String, searchStr: String)
  : Promise<Array<any>>
