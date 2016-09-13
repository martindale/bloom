(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"html"}
;; :source-paths #{"test"}

 :dependencies '[[adzerk/boot-cljs "1.7.228-1"]
                 [adzerk/boot-cljs-repl "0.3.2"]
                 [adzerk/boot-reload "0.4.12" :scope "test"]
                 [adzerk/boot-template "1.0.0"]
                 [adzerk/boot-test "1.1.2"]
                 [adzerk/bootlaces "0.1.13"]
                 [ajchemist/boot-figwheel "0.5.4-6"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [danielsz/boot-autoprefixer "0.0.8"]
                 [figwheel-sidecar "0.5.4-7" :scope "test"]
                 [pandeiro/boot-http "0.7.3"]
                 [org.clojure/clojure       "1.7.0"  :scope "provided"]
                 [org.clojure/clojurescript "1.9.89" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                 [org.martinklepsch/boot-garden "1.3.2-0"]
                 [org.martinklepsch/boot-gzip "0.1.2"]
;;                 [seancorfield/boot-expectations "1.0.5" :scope "test"]
                 [weasel "0.7.0" :scope "test"]])

(require '[adzerk.boot-cljs :refer :all]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-test :refer :all]
         '[adzerk.bootlaces :refer :all]
         '[danielsz.autoprefixer :refer [autoprefixer]]
         '[pandeiro.boot-http :refer [serve]]
         ;;         '[seancorfield.boot-expectations :refer [expectation]]
         )

(deftask dev
  "Launch Immediate Feedback Development Environment"
  []
  (comp 
   (serve :dir "target")
   (watch)
   (reload)
   (cljs-repl) ;; before cljs task
   (cljs)
   (target :dir #{"target"})))
