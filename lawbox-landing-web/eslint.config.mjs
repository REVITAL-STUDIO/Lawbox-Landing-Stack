import { fileURLToPath } from "url";
import { dirname } from "path";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["src/api/**", "node_modules/", ".next/", "orval/**"],
  },
  {
    rules: {
      "react/display-name": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" }
      ],
    },
  },
];

export default eslintConfig;