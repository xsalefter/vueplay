import { inject } from 'vue'
import { PersonPlugin } from '@/plugins/personPlugin'

export const getInjectedPerson = () => {
  // Proof that inject not working outside .vue files
  const injectedPerson = inject('personPlugin') as PersonPlugin;
  console.log('showInjectedPerson() : injectedPerson:', JSON.stringify(injectedPerson));

  return injectedPerson;
};
