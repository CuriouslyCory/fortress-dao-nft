import { Gender } from './gender';
import { HeadItem } from './head-item';
import { BodyItem } from './body-item';

export interface Character {
    gender: Gender;
    head?: number;
    body?: number;
    legs?: number;
    left_arm?: number;
    right_arm?: number;
    feet?: number;
}
