(ns adzerk.boot-reload.init1056 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:50689" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})