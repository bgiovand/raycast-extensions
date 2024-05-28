import { ActionPanel, Color, Detail, Action, Clipboard } from "@raycast/api";
import AddPRReview from "./AddPRReview";
import ClosePR from "./ClosePR";
import MergePR from "./MergePR";
import { PullRequestOwnProps } from "./PullRequest";
import ReopenPR from "./ReopenPR";

type PullRequestDetailOwnProps = Omit<PullRequestOwnProps, "avatarUrl" | "createdAt">;

export default function PullRequestDetail(props: PullRequestDetailOwnProps) {
  const { body, id, number, repository, state, title, url } = props;

  return (
    <Detail
      markdown={body || "No description provided"}
      navigationTitle={title}
      actions={
        <ActionPanel title={`#${number} in ${repository.nameWithOwner}`}>
          <ActionPanel.Section>
            <Action.OpenInBrowser url={url} />
            {state === "OPEN" && (
              <Action.Push
                title="Add Review"
                target={<AddPRReview id={id} title={title} />}
                icon={{
                  source: "doc-plaintext-16",
                }}
                shortcut={{
                  modifiers: ["cmd", "shift"],
                  key: "r",
                }}
              />
            )}
          </ActionPanel.Section>
          {state === "OPEN" && (
            <ActionPanel.Section>
              {repository.mergeCommitAllowed && (
                <MergePR
                  id={id}
                  number={number}
                  title="Create Merge Commit"
                  shortcut={{
                    modifiers: ["cmd"],
                    key: "enter",
                  }}
                />
              )}
              {repository.squashMergeAllowed && (
                <MergePR id={id} method="SQUASH" number={number} title="Squash and Merge" />
              )}
              {repository.rebaseMergeAllowed && (
                <MergePR id={id} method="REBASE" number={number} title="Rebase and Merge" />
              )}
            </ActionPanel.Section>
          )}
          <ActionPanel.Section>
            <Action
              title="Copy Pull Request Number"
              icon={{
                source: "doc-on-clipboard-16",
                tintColor: Color.PrimaryText,
              }}
              onAction={() => Clipboard.copy(`${number}`)}
            />
            <Action
              title="Copy Pull Request URL"
              icon={{
                source: "doc-on-clipboard-16",
                tintColor: Color.PrimaryText,
              }}
              onAction={() => Clipboard.copy(url)}
            />
          </ActionPanel.Section>
          {state !== "MERGED" && (
            <ActionPanel.Section>
              {state === "OPEN" && <ClosePR id={id} number={number} shouldPop />}
              {state === "CLOSED" && <ReopenPR id={id} number={number} />}
            </ActionPanel.Section>
          )}
        </ActionPanel>
      }
    />
  );
}
