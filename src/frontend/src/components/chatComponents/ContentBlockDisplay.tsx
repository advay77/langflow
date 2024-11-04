"use client";
import { BorderTrail } from "@/components/core/border-trail";
import { TextShimmer } from "@/components/ui/TextShimmer";
import { CodeBlock } from "@/modals/IOModal/components/chatView/chatMessage/codeBlock";
import { ContentBlock } from "@/types/chat";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ContentBlockDisplayProps {
  contentBlocks: ContentBlock[];
  isLoading?: boolean;
}

export function ContentBlockDisplay({
  contentBlocks,
  isLoading,
}: ContentBlockDisplayProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative py-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative rounded-lg border border-border bg-background",
          "overflow-hidden",
        )}
      >
        <div
          className="flex cursor-pointer items-center justify-between p-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="font-semibold text-primary">
            Execution Details ({contentBlocks.length})
          </h3>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform",
              isExpanded ? "rotate-180" : "",
            )}
          />
        </div>

        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative border-t border-border"
          >
            {contentBlocks.map((block, index) => (
              <div
                key={`${block.title}-${index}`}
                className={cn(
                  "relative p-4",
                  index !== contentBlocks.length - 1 &&
                    "border-b border-border",
                )}
              >
                <div className="mb-2 font-medium">{block.title}</div>
                <div className="text-sm text-muted-foreground">
                  {Object.entries(block.content)
                    .filter(([key]) => key !== "type")
                    .map(([key, value]) => {
                      const stringValue = JSON.stringify(value, null, 2);
                      return (
                        <div key={key} className="capitalize">
                          {key}:
                          {typeof value === "object" ? (
                            <CodeBlock language="json" value={stringValue} />
                          ) : (
                            <span className="ml-1">{String(value)}</span>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mt-4 rounded-lg border border-border bg-background p-4"
        >
          <BorderTrail
            className="bg-zinc-600 opacity-50 dark:bg-zinc-400"
            size={60}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
          />
          <div className="relative z-10 flex flex-col space-y-3">
            <TextShimmer className="w-24">Processing...</TextShimmer>
            <div className="flex animate-pulse flex-col space-y-2">
              <div className="h-2 w-1/4 rounded bg-muted"></div>
              <div className="h-2 w-1/2 rounded bg-muted"></div>
              <div className="h-2 w-1/3 rounded bg-muted"></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
