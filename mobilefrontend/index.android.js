var modules={'react-native': require('react-native'), 'react': require('react')};modules['./images/bloom.png']=require('./images/bloom.png');modules['./images/cljs.png']=require('./images/cljs.png');
require('figwheel-bridge').withModules(modules).start('bloom','android','localhost');