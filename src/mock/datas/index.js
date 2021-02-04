import {autoImportModule} from '@/public/utils';

export default autoImportModule(require.context('./', false, /\.mock.js$/),/\.mock.js$/)