import InputComponent from "@/components/inputComponent";
import { BuildStatus } from "@/constants/enums";
import useFlowsManagerStore from "@/stores/flowsManagerStore";
import useFlowStore from "@/stores/flowStore";
import { VertexBuildTypeAPI } from "@/types/api";
import { cn } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function NodeName({
  display_name,
  selected,
  nodeId,
  showNode,
  validationStatus,
  isOutdated,
}: {
  display_name?: string;
  selected: boolean;
  nodeId: string;
  showNode: boolean;
  validationStatus: VertexBuildTypeAPI | null;
  isOutdated: boolean;
}) {
  const [inputName, setInputName] = useState(false);
  const [nodeName, setNodeName] = useState(display_name);
  const takeSnapshot = useFlowsManagerStore((state) => state.takeSnapshot);
  const setNode = useFlowStore((state) => state.setNode);
  useEffect(() => {
    if (!selected) {
      setInputName(false);
    }
  }, [selected]);

  useEffect(() => {
    setNodeName(display_name);
  }, [display_name]);

  return inputName ? (
    <div className="m-[1px] w-full">
      <InputComponent
        onBlur={() => {
          setInputName(false);
          if (nodeName?.trim() !== "") {
            setNodeName(nodeName);
            setNode(nodeId, (old) => ({
              ...old,
              data: {
                ...old.data,
                node: {
                  ...old.data.node,
                  display_name: nodeName,
                },
              },
            }));
          } else {
            setNodeName(display_name);
          }
        }}
        value={nodeName}
        autoFocus
        onChange={setNodeName}
        password={false}
        blurOnEnter={true}
        id={`input-title-${display_name}`}
      />
    </div>
  ) : (
    <div className="group flex w-full items-center gap-1">
      <div
        onDoubleClick={(event) => {
          setInputName(true);
          takeSnapshot();
          event.stopPropagation();
          event.preventDefault();
        }}
        data-testid={"title-" + display_name}
        className="nodoubleclick w-full cursor-text truncate font-medium text-primary"
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "max-w-44 truncate text-[14px]",
              validationStatus?.data?.duration && "max-w-36",
              isOutdated && "max-w-40",
            )}
          >
            {display_name}
          </span>
        </div>
      </div>
    </div>
  );
}
