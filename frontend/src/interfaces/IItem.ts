export default interface IItem {
    id: number;
    owner_id: number;
    type: string;
    subtype: string;
    quality: number;
    name: string;
    level: number;
    atk: number;
    def: number;
    properties: []
}