import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { Container, Row, Col, Text, Grid } from '@nextui-org/react';
import Admonition from '@theme/Admonition';
import { ReleaseDownloadButton } from '../../components/ReleaseDownloadButton';
import { DownloadTable } from '../../components/DownloadTable';
import { getLatestRelease } from '../../components/ReleaseDownloadButton';
const baseApiUrl = location.hostname === "localhost" ? "http://localhost:3000/v1" : "https://api.pcsx2.net/v1"
import Head from '@docusaurus/Head';
import { GoogleAd } from '../../components/GoogleAd';

// TODO - handle API error



const releaseTableColumns = [
  {
    key: "version",
    label: "VERSION",
  },
  {
    key: "createdAt",
    label: "DATE",
  }
];

const renderReleaseCell = (release, columnKey) => {
  const cellValue = release[columnKey];
  switch (columnKey) {
    case "version":
      return <span className="monospaced">{cellValue}</span>
    default:
      const date = new Date(cellValue);
      return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
};

const pullRequestTableColumns = [
  {
    key: "githubUser",
    label: "AUTHOR",
  },
  {
    key: "title",
    label: "CHANGE",
  }
];

const renderPullRequestCell = (user, columnKey) => {
  return user[columnKey];
};



export default function Downloads() {
  const pageSize = 10;
  // State
  // - stables
  const [stableReleases, setStableReleases] = useState({ data: [] });
  const [latestStableRelease, setLatestStableRelease] = useState({});
  // - nightlies
  const [nightlyReleases, setNightlyReleases] = useState({ data: [] });
  const [latestNightlyRelease, setLatestNightlyRelease] = useState({});
  // - pull requests
  const [pullRequests, setPullRequests] = useState({ data: [] });

  useEffect(async () => {
    const resp = await fetch(
      `${baseApiUrl}/latestReleasesAndPullRequests`
    );
    const data = await resp.json();

    // Stable Releases
    // NOTE - iterate through the releases to find the latest for each platform
    // - this does mean there is an edge-case where a valid version is on the next page but this
    // is not actually a problem we currently have and should be solved at the API level
    setLatestStableRelease({
      windows: getLatestRelease(data.stableReleases.data, "Windows"),
      linux: getLatestRelease(data.stableReleases.data, "Linux"),
      macos: getLatestRelease(data.stableReleases.data, "MacOS"),
    });

    setLatestNightlyRelease({
      windows: getLatestRelease(data.nightlyReleases.data, "Windows"),
      linux: getLatestRelease(data.nightlyReleases.data, "Linux"),
      macos: getLatestRelease(data.nightlyReleases.data, "MacOS"),
    });

    setStableReleases(data.stableReleases);
    setNightlyReleases(data.nightlyReleases);
    setPullRequests(data.pullRequestBuilds);
  }, []);

  return (
    <Layout
      title="Downloads"
      description="The official source for the latest stable and nightly builds (aka dev builds) for PCSX2 on all supported platforms">
      <Head>
        <meta property="og:description" content="" />
        <meta name="keywords" content="pcsx2 downloads,pcsx2 dev builds,pcsx2 dev,pcsx2 nightlies,pcsx2 stable"/>
      </Head>
      <main>
        <Container fluid css={{ mt: "2em" }}>
          <Grid.Container gap={2}>
            <Grid md={6}>
              <Text
                h1
                size={40}
                css={{
                  textGradient: "180deg, #5099ff 25%, #465eae 100%",
                }}
                weight="bold"
              >
                Stable Releases
              </Text>
              <Row css={{ mb: "1em" }}>
                <Col><span>Stable releases are infrequent but well tested compared to the nightly releases.</span></Col>
              </Row>
              <Row css={{ mb: "1em" }}>
                <Col><span>If you need help using the emulator, <a href="/docs/usage/setup/">see the following article.</a></span></Col>
              </Row>
              <Row css={{ mb: "1em" }}>
                <Col>
                  <Admonition type="info">
                    <p>As we are now drawing closer to releasing a new stable version, we encourage you to use the latest nightly instead. If you encounter a problem, you will likely be told to try the latest nightly as a first step.</p>
                  </Admonition>
                </Col>
              </Row>
              <Row css={{ mb: "2em" }}>
                <Col>
                  <ReleaseDownloadButton
                    release={latestStableRelease}
                    buttonText={"Latest Stable"}
                    isNightly={false}
                  />
                </Col>
              </Row>
              <GoogleAd></GoogleAd>
              <Row>
                <Col><h2>Previous Stable Releases</h2></Col>
              </Row>
              <DownloadTable
                pageSize={pageSize}
                tableLabel={"Previous stable releases table"}
                color={"primary"}
                initialTableData={stableReleases}
                tableColumns={releaseTableColumns}
                renderRowFunc={renderReleaseCell}
                fetchMoreFunc={async (offset) => {
                  return await fetch(`${baseApiUrl}/stableReleases?offset=${offset}`);
                }}
                tableType={"stable"} />
            </Grid>
            <Grid md={6}>
              <Text
                h1
                size={40}
                css={{
                  textGradient: "180deg, $warning 25%, #777500 100%",
                }}
                weight="bold"
              >
                Nightly Releases
              </Text>
              <Row css={{ mb: "1em" }}>
                <Col><span>There is a new nightly release anytime a change is made, so you are getting the latest and greatest (but sometimes buggy) experience</span></Col>
              </Row>
              <Row css={{ mb: "1em" }}>
                <Col><span>For help using these releases, <a href="/docs/usage/nightly-setup/">see the following article.</a></span></Col>
              </Row>
              <Row css={{ mb: "1em" }}>
                <Col>
                  <Admonition type="tip">
                    <p>If your CPU supports AVX2 you should use it over SSE4</p>
                  </Admonition>
                </Col>
              </Row>
              <Row css={{ mb: "2em" }}>
                <Col>
                  <ReleaseDownloadButton
                    release={latestNightlyRelease}
                    buttonText={"Latest Nightly"}
                    isNightly={true}
                  />
                </Col>
              </Row>
              <GoogleAd/>
              <Row>
                <Col><h2>Previous Nightly Releases</h2></Col>
              </Row>
              <DownloadTable
                pageSize={pageSize}
                tableLabel={"Previous nightly releases table"}
                color={"warning"}
                initialTableData={nightlyReleases}
                tableColumns={releaseTableColumns}
                renderRowFunc={renderReleaseCell}
                fetchMoreFunc={async (offset) => {
                  return await fetch(`${baseApiUrl}/nightlyReleases?offset=${offset}`);
                }}
                tableType={"nightly"} />
              <GoogleAd></GoogleAd>
              <Row css={{ mt: "1em" }}>
                <Col><h2>Active Pull Requests</h2></Col>
              </Row>
              <Row css={{ mb: "1em" }}>
                <Col>These are changes that are actively being worked on.</Col>
              </Row>
              <Row css={{ mb: "1em" }}>
                <Col>Provided for visibility or for those interested in testing an upcoming change</Col>
              </Row>
              <DownloadTable
                pageSize={pageSize}
                tableLabel={"Active pull requests"}
                color={"secondary"}
                initialTableData={pullRequests}
                tableColumns={pullRequestTableColumns}
                renderRowFunc={renderPullRequestCell}
                fetchMoreFunc={async (offset) => {
                  return await fetch(`${baseApiUrl}/pullRequestBuilds?offset=${offset}`);
                }}
                tableType={"pullRequests"} />
            </Grid>
          </Grid.Container>
        </Container>
      </main>
    </Layout>
  );
}
