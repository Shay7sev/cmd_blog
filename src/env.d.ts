/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  SITE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
