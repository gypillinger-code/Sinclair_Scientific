# Sinclair Scientific

A normálalakos Sinclair Scientific számológép telepíthető webalkalmazása (PWA).

## Közzététel a GitHub Pages-en

1. Hozz létre egy új GitHub-repót, például `sinclair-scientific` néven. GitHub Free esetén válaszd a **Public** beállítást.
2. A ZIP-et csomagold ki. A benne lévő fájlokat töltsd fel közvetlenül a repó gyökerébe az **Add file → Upload files** menüponttal, majd mentsd a módosítást a `main` ágra.
3. A **Settings → Pages** oldalon válaszd a **Deploy from a branch**, majd a **main** és **/(root)** beállítást, és mentsd.
4. A Pages oldalon megjelenő HTTPS-címet nyisd meg a telefonodon.

## Telepítés Androidon

A Pages-címet nyisd meg Chrome-ban. A **⋮ → Hozzáadás a kezdőképernyőhöz → Telepítés** menüponttal add hozzá az alkalmazást. A Chrome verziójától függően a **Telepítés** közvetlenül a menüben is megjelenhet.

Az első online megnyitás után az alkalmazás gyorsítótárba menti a szükséges fájlokat. A telepített ikonnal repülő üzemmódban is kipróbálhatod. A számológép a kék off/on kapcsolóval indul.

Frissítéskor növeld a verziószámot a `sw.js` fájlban, hogy az új változathoz új gyorsítótár készüljön.
