
import {autoImportModule} from '@/public/utils';

export default autoImportModule(require.context('./', true, /\.lang.js$/),/\.lang.js$/)