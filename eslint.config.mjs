import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  ...nextCoreWebVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      // React 19 rule that flags legitimate hydration-sync effects
      // (reading localStorage / DOM classList on mount). Downgraded to warn.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**", "public/**"],
  },
];
