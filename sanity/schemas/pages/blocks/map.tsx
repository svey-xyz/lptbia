import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

import constructors from '@/sanity/lib/constructors';

const fields: any = []

export const map = constructors.block({ name: 'map', fields })