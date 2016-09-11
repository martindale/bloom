#!/usr/bin/env boot

(set-env!
  :source-paths #{}
  :resource-paths #{"html" "less" "resources" "src"}
  :dependencies '[; Boot setup
                  [adzerk/boot-cljs "1.7.228-1"]
                  [adzerk/boot-reload "0.4.12"]
                  [deraen/boot-less "0.5.0"]
                  [pandeiro/boot-http "0.7.3"]

                  ; App dependencies
                  [org.clojure/clojurescript "1.7.228"]
                  [org.omcljs/om "1.0.0-alpha28-SNAPSHOT"]

                  ; Other dependencies
                  [devcards "0.2.0-8"]])

(task-options!
  pom {:project 'bloom-webfrontend
       :version "1.0"})

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-reload :refer [reload]]
         '[deraen.boot-less :refer [less]]
         '[pandeiro.boot-http :refer [serve]])

(deftask build-development
  []
  (comp
    (less)
    (cljs :source-map true
          :optimizations :none
          :compiler-options {:devcards true})))

(deftask run-development
  []
  (comp
    (watch)
    (reload :on-jsload 'app.app/run)
    (build-development)
    (serve :dir "target")))

(deftask build-production
  []
  (comp
    (less :compression true)
    (cljs :optimizations :advanced
          :compiler-options {:devcards true})))

(deftask run-production
  []
  (comp
    (watch)
    (reload :on-jsload 'app.app/run)
    (build-production)
    (serve :dir "target")))
