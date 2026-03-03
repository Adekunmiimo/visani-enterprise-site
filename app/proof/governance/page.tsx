// ✅ CREATE NEW FILE — app/proof/governance/page.tsx
import { redirect } from "next/navigation";

export default function ProofGovernanceRedirect() {
  redirect("/proof/library/governance-before-scale");
}