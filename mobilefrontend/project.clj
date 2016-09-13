(defproject bloom "1.0.0-SNAPSHOT"
            :description "Bloom is a nonprofit, mobile peer-to-peer education system for hackers. ♥‿♥"
            :url "https://bloomv1.org/"

            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}


            :dependencies [[org.clojure/clojure "1.9.0-alpha12"]
                           [org.clojure/clojurescript "1.9.229"]
                           [org.omcljs/om "1.0.0-alpha43" :exclusions [cljsjs/react cljsjs/react-dom]]
                           [prismatic/schema "1.1.3"]
                           [cljs-ajax "0.5.8"]]


            :plugins [[lein-cljsbuild "1.1.4"]
                      [lein-figwheel "0.5.0-6"]]


            :clean-targets ["target/" "index.ios.js" "index.android.js"]


            :aliases {"prod-build" ^{:doc "Recompile code with prod profile."}
                                    ["do" "clean"
                                    ["with-profile" "prod" "cljsbuild" "once" "ios"]
                                    ["with-profile" "prod" "cljsbuild" "once" "android"]]}


            :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.0-6"]
                                            [com.cemerick/piggieback "0.2.1"]]

                             :source-paths ["src" "env/dev"]

                             :cljsbuild    {:builds {:ios     {:source-paths ["src" "env/dev"]
                                                               :figwheel     true
                                                               :compiler     {:output-to     "target/ios/not-used.js"
                                                                              :main          "env.ios.main"
                                                                              :output-dir    "target/ios"
                                                                              :optimizations :none}}

                                                     :android {:source-paths ["src" "env/dev"]
                                                               :figwheel     true
                                                               :compiler     {:output-to     "target/android/not-used.js"
                                                                              :main          "env.android.main"
                                                                              :output-dir    "target/android"
                                                                              :optimizations :none}}}}

                             :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}

                       :prod {:cljsbuild {:builds {:ios     {:source-paths ["src" "env/prod"]
                                                             :compiler     {:output-to     "index.ios.js"
                                                                            :main          "env.ios.main"
                                                                            :output-dir    "target/ios"
                                                                            :static-fns    true
                                                                            :optimize-constants true
                                                                            :optimizations :simple
                                                                            :closure-defines {"goog.DEBUG" false}}}

                                                   :android {:source-paths ["src" "env/prod"]
                                                             :compiler     {:output-to     "index.android.js"
                                                                            :main          "env.android.main"
                                                                            :output-dir    "target/android"
                                                                            :static-fns    true
                                                                            :optimize-constants true
                                                                            :optimizations :simple
                                                                            :closure-defines {"goog.DEBUG" false}}}}}
                              }})
