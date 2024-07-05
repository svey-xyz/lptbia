import constructors from '@/sanity/schemas/pages/constructors';
import { RiInputField } from 'react-icons/ri';

const fields: any = []

export const Newsletter = constructors.block({ name: 'Newsletter', fields, icon: RiInputField })