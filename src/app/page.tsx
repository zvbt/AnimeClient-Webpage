'use client'
import { useState, useEffect } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import Link from "next/link";
import Image from 'next/image';

async function fetchLatestVersion() {
    const response = await fetch("https://api.github.com/repos/zvbt/AnimeClient/releases/latest");
    const data = await response.json();
    return data.tag_name;
}

async function download() {
    const latestVersion = await fetchLatestVersion();
    const versionWithoutV = latestVersion.replace('v', '');
    const downloadUrl = `https://github.com/zvbt/AnimeClient/releases/download/${latestVersion}/AnimeClient-Setup-${versionWithoutV}.exe`;
    const downloadButton = document.getElementById("downloadButton");
    if (downloadButton) {
        downloadButton.innerHTML = `
            <p>Download</p>
            <p class="version">${latestVersion}</p>
        `;
        window.location.href = downloadUrl;
    }
}

export default function Home() {
    useEffect(() => {
        fetchLatestVersion().then((latestVersion) => {
            const latestVersionElement = document.getElementById("latestVersion");
            if (latestVersionElement) {
                latestVersionElement.textContent = latestVersion;
            }
        });
    }, []);

    return (
        <main>
            <div className="ctp-mocha relative h-screen bg-ctp-mantle">
                <Navbar />

                <div className="flex flex-col items-center fixed mt-36 top-0 left-0 w-full h-full z-10 text-ctp-text">
                    <h1 className="text-3xl font-semibold">AnimeClient</h1>
                    <div id="services" className="pt-2">
                        <div className="flex justify-center pb-2">Streaming services:</div>
                        <div className="flex justify-center">
                            <Link href={'https://anilist.co'}><Image src={"/assets/providers/anilist.png"} alt="" width={50} height={50} quality={100} /></Link>
                            <Link href={'https://animationdigitalnetwork.fr/'}><Image src={"/assets/providers/adn.png"} alt="" width={40} height={40} quality={100} /></Link>
                            <Link href={'https://neko-sama.fr'}><Image src={"/assets/providers/nekosama.png"} alt="" width={50} height={50} quality={100} /></Link>
                            <Link href={'https://voiranime.com'}><Image src={"/assets/providers/voiranime.png"} alt="" width={50} height={50} quality={100} /></Link>
                            <Link href={'https://vostfree.ws'}><Image src={"/assets/providers/vostfree.png"} alt="" width={50} height={50} quality={100} /></Link>
                        </div>
                        <div id="video" className="flex justify-center w-[600px] pt-10 rounded">
                            <video src="/assets/video/preview.mp4" autoPlay loop muted></video>
                        </div>
                        <div id="os" className="flex justify-center pt-5">
                            <div className="flex">
                                <Image src={"/assets/svg/windows.svg"} alt="windows" width={24} height={24} className='fill-current text-ctp-text'></Image>
                                <Image src={"/assets/svg/mac.svg"} alt="mac" width={24} height={24} className='fill-current text-ctp-text'></Image>
                                <Image src={"/assets/svg/linux.svg"} alt="linux" width={24} height={24} className='fill-current text-ctp-text'></Image>
                            </div>
                        </div>
                        <div id="download" className="flex justify-center pt-5">
                            <button id="downloadButton" onClick={download} className="bg-ctp-sapphire py-3 px-10 rounded-lg text-white font-semibold">
                                <p>Download</p>
                                <p className="version" id="latestVersion">Fetching...</p>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    );
}
