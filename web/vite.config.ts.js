// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    basicSsl(),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar"
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  server: {
    https: true,
    proxy: {
      "/api": {
        target: "http://localhost:8484",
        changeOrigin: true,
        rewrite: (path2) => path2
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve("C:\\code_project\\PackageTracking\\web", "src")
    }
  },
  out
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBiYXNpY1NzbCBmcm9tICdAdml0ZWpzL3BsdWdpbi1iYXNpYy1zc2wnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBiYXNpY1NzbCgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAge1xuICAgICAgICAgICduYWl2ZS11aSc6IFtcbiAgICAgICAgICAgICd1c2VEaWFsb2cnLFxuICAgICAgICAgICAgJ3VzZU1lc3NhZ2UnLFxuICAgICAgICAgICAgJ3VzZU5vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAndXNlTG9hZGluZ0JhcidcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXVxuICAgIH0pXG4gIF0sXG4gIHNlcnZlcjp7XG4gICAgaHR0cHM6dHJ1ZSxcbiAgICBwcm94eTp7XG4gICAgICAnL2FwaSc6e1xuICAgICAgICB0YXJnZXQ6J2h0dHA6Ly9sb2NhbGhvc3Q6ODQ4NCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjp0cnVlLFxuICAgICAgICByZXdyaXRlOihwYXRoKT0+cGF0aFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZTp7XG4gICAgYWxpYXM6e1xuICAgICAgJ0AnOnBhdGgucmVzb2x2ZShcIkM6XFxcXGNvZGVfcHJvamVjdFxcXFxQYWNrYWdlVHJhY2tpbmdcXFxcd2ViXCIsJ3NyYycpXG4gICAgfVxuICB9LFxuICBvdXRcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFlBQVk7QUFBQSxZQUNWO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsZ0JBQWdCLENBQUM7QUFBQSxJQUMvQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBTztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sT0FBTTtBQUFBLE1BQ0osUUFBTztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsY0FBYTtBQUFBLFFBQ2IsU0FBUSxDQUFDLFVBQU87QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFRO0FBQUEsSUFDTixPQUFNO0FBQUEsTUFDSixLQUFJLEFBQUssYUFBUSwwQ0FBeUMsS0FBSztBQUFBLElBQ2pFO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
