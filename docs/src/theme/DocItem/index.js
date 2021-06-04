/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocPaginator from "@theme/DocPaginator";
import Seo from "@theme/Seo";
import TOC from "@theme/TOC";
import clsx from "clsx";
import styles from "./styles.module.css";
import {
  useActivePlugin,
  useVersions,
  useActiveVersion,
} from "@theme/hooks/useDocs";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Search from "@theme/SearchBar";
import EditThisPage from "@theme/GitEditThisPage";
import { VersionDropdown } from "@site/src/components/VersionDropdown";
import { useViewport } from "@site/src/hooks/useViewport";

function DocItem(props) {
  const { width } = useViewport() || 0;
  const { siteConfig } = useDocusaurusContext();
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const {
    description,
    title,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
  } = metadata;
  const { pluginId } = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId);
  const version = useActiveVersion(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1; // For meta title, using frontMatter.title in priority over a potential # title found in markdown
  // See https://github.com/facebook/docusaurus/issues/4665#issuecomment-825831367

  const metaTitle = frontMatter.title || title;
  return (
    <>
      <Seo
        {...{
          title: metaTitle,
          description,
          keywords,
          image,
        }}
      />

      <div className="row">
        <div
          className={clsx("col", {
            [styles.docItemCol]: !hideTableOfContents,
          })}
        >
          <div className={styles.docItemContainer}>
            <article>
              {!hideTitle && (
                <>
                  <div className="doc-content--header">
                    <header>
                      <h1 className={styles.docTitle}>{title}</h1>
                    </header>
                    {width > 767 ? (
                      <div className="action-buttons">
                        <EditThisPage editUrl={editUrl} />
                        <VersionDropdown />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              )}
              <div
                className={`searhBar ${width < 767 ? "wt_versionDropdown" : ""}`}
              >
                <Search />
                {width < 767 ? <VersionDropdown /> : ""}
              </div>
              <div className="markdown">
                <DocContent />
              </div>
            </article>
            <div className="margin-vert--lg">
              <DocPaginator metadata={metadata} />
            </div>
          </div>
        </div>
        {!hideTableOfContents && DocContent.toc && (
          <div className="rightAligned-col-250 col col--3">
            <TOC toc={DocContent.toc} />
          </div>
        )}
      </div>
    </>
  );
}

export default DocItem;
