"use client";

import { useState } from "react";
import {
  Tabs,
  Tab,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

const cardChallenges = [
  { label: "qr-code", href: "/qr-code" },
  { label: "Preview-Card", href: "/preview" },
  { label: "Recipe", href: "/recipe" },
  { label: "interactive rating", href: "/interactive-rating" },
  { label: "Acticle Preview", href: "/article-preview" },
];

const landingPageChallenges = [
  {
    label: "matchMedia",
    href: "/",
  },
];

export const ChallengeTabs = () => {
  const [selected, setSelected] = useState<string | number>("Cards");

  return (
    <div className="flex w-full flex-col">
      <Card className=" w-[340px] max-w-full">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(value) => setSelected(value)}
          >
            <Tab key="cards" title="Cards">
              <ul className="space-y-3">
                {cardChallenges.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} target="_blank">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Tab>

            <Tab key="landing-page" title="Landing Pages">
              <ul className="">
                {landingPageChallenges.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} target="_blank">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
